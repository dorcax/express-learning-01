const db = require("../../config/db");
const path = require("path");
const asyncWrapper = require("../../middleware/asyncWrapper");
const {
  createCustomError,
  customApiError,
} = require("../../middleware/customApiError");
const { validateBlog } = require("../../validation/userValidation");

// an endpoint to create blog superadmin
module.exports.createBlog = asyncWrapper(async (req, res) => {
  const { title, content, isPublished } = req.body;
  // validate blog
  const { error } = validateBlog(req.body);
  if (error) {
    return next(customApiError(error.message, 400));
  }
  // create blog
  const newBlog = await db.blog.create({
    data: {
      ...req.body,
      user: {
        connect: {
          id: req.User.id,
        },
      },
    },
  });
  return res.status(200).json(newBlog);
});

// an endpoint to get a blog for user
module.exports.getBlog = asyncWrapper(async (req, res) => {
  const blogs = await db.blog.findMany({
    include: {
      user: true,
      like: {
        include: {
          user: true,
        },
      },
      comment: true,
    },
  });

  res.status(200).json(blogs);
});
// an endpoint to like a blog
module.exports.createLike = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;

  const likedBefore = await db.like.findFirst({
    where: { AND: [{ blogId: +blogId }, { userId: req.User.id }] },
  });

  if (likedBefore)
    return next(createCustomError("You have liked this blog before", 404));

  const like = await db.like.create({
    data: {
      blog: {
        connect: {
          id: +blogId,
        },
      },
      user: {
        connect: {
          id: req.User.id,
        },
      },
    },
  });

  res.status(201).json(like);
});

// create an endpoint to publish a blog - (make sure its the user that created the blog that pubslishes it
module.exports.publishBlog = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;
  const publishedBlog = await db.blog.updateMany({
    where: { id: +blogId, userId: req.User.id },
    data: {
      isPublished: true,
    },
  });
  if (!publishedBlog) {
    return next(createCustomError("user can not publish the blog", 404));
  }
  res.status(200).json("blog published");
});

// Fetch only published blogs
module.exports.getPublishedBlog = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;
  const getblog = await db.blog.findMany({
    where: {
      AND: [{ id: +blogId }, { userId: req.User.id }, { isPublished: true }],
    },
  });
  if (!getblog) {
    return next(createCustomError("no user with that id", 404));
  }
  res.status(200).json(getblog);
});
// create endpoint for a user to comment on a blog and delete his/her comment
module.exports.commentBlog = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;
  const { content } = req.body;
  const createComment = await db.comment.create({
    data: {
      ...req.body,
      user: {
        connect: {
          id: req.User.id,
        },
      },
      Blog: {
        connect: {
          id: +blogId,
        },
      },
    },
  });
  // console.log("haa")
  res.status(200).json("comment created");
});

// edit blog
module.exports.editBlog = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;
  const Editblog = await db.blog.updateMany({
    where: { AND: [{ id: +blogId }, { userId: req.User.id }] },
    data: {
      ...req.body,
    },
  });
  if (!Editblog) {
    return next(createCustomError("user can not edit the blog", 404));
  }
  res.status(200).json(Editblog);
});

// edit comment

module.exports.editComment = asyncWrapper(async (req, res, next) => {
  const { blogId, commentId } = req.params;
  const { title, content, isPublished } = req.body;
  // validate blog
  const { error } = validateBlog(req.body);
  if (error) {
    return next(customApiError(error.message, 400));
  }
  const editComment = await db.comment.updateMany({
    where: {
      AND: [{ id: +commentId }, { blogId: +blogId }, { userId: req.User.id }],
    },
    data: {
      ...req.body,
    },
  });
  if (!editComment) {
    return next(createCustomError("no user found with this id", 404));
  }
  res.status(200).json(editComment);
});

// delete his/her comment
module.exports.deleteComment = asyncWrapper(async (req, res, next) => {
  const { blogId, commentId } = req.params;
  const deleteComment = await db.comment.deleteMany({
    where: {
      AND: [{ id: +commentId }, { userId: req.User.id }, { blogId: +blogId }],
    },
  });
  if (!deleteComment) {
    return next(createCustomError("no user id found", 404));
  }

  res.status(200).json("comment deleted");
});
// 3. Create enpoint for user to unlike
module.exports.deleteLike = asyncWrapper(async (req, res, next) => {
  const { blogId, likeId } = req.params;
  const unlike = await db.like.deleteMany({
    where: {
      AND: [{ id: +likeId }, { blogId: +blogId }, { userId: req.User.id }],
    },
  });
  res.status(200).json(unlike);
  if (!unlike) {
    return next(createCustomError("error has occured", 404));
  }
});

// an endpoint to delete blog

module.exports.deleteBlog = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;
  const deleteBlog = await db.blog.deleteMany({
    where: { AND: [{ id: +blogId }, { userId: req.User.id }] },
  });
  if (!deleteBlog) {
    return next(createCustomError("error deleting the blog"));
  }
  res.status(200).json("blog deleted");
});
