const db = require("../../config/db");
const path = require("path");
const cloudinary = require("../../utils/cloudinary");
const asyncWrapper = require("../../middleware/asyncWrapper");
const {
  createCustomError,
  customApiError,
} = require("../../middleware/customApiError");
const { validateBlog,validateComment } = require("../../validation/userValidation");
const imageUpload = require("./image");

// an endpoint to create blog superadmin
module.exports.createBlog = async (req, res, next) => {
  // validate blog
  try {
    const { error, value } = validateBlog(req.body);
  if (error) {
    return next(createCustomError(error.message, 400));
  }
  // create blog
  // const imageUrl2 = await imageUpload(imageUrl)
  const { title, content, isPublished, imageUrl, category } = value;

  const result = await cloudinary.uploader.upload(req.file.path);

  const imageUrl2 = result.secure_url;
  const newBlog = await db.blog.create({
    data: {
      ...value,
      imageUrl: imageUrl2,
      user: {
        connect: {
          id: req.User.id,
        },
      },
    },
  });
  return res.status(200).json({ newBlog: newBlog });
}
   catch (error) {
    console.log(error)
  }
}
  

// an endpoint to get a blog for user
module.exports.getBlog = asyncWrapper(async (req, res) => {
  const blogs = await db.blog.findMany({
    where: { userId: 5 },
    include: {
      like:true,
      user: true,
      comment:true
    },
  });

  res.status(200).json(blogs);
});
// an endpoint to like a blog
module.exports.createLike = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;

  const likedBefore = await db.like.findFirst({
    where: {AND :[{ blogId: +blogId  },{userId:req.User.id}]},
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
      AND: [{ id: +blogId }, { isPublished: true }],
    },
    include: {
      user: true,
      comment: true,
      like:true
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
 
  const { error, value } = validateComment(req.body);
  if (error) {
    return next(createCustomError(error.message, 400));
  }
  const { content } = value;
  const createComment = await db.comment.create({
    data: {
      ...value,
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

// get all comment
module.exports.getComment = asyncWrapper(async (req, res, next) => {
  const { blogId } = req.params;
  const getComment = await db.comment.findMany({
    where: { blogId: +blogId },
    include: {
      user: true,
      // comment:true
    },
  });
  if (!getComment) {
    return next(
      createCustomError("can't find user with that particular id", 404)
    );
  }
  res.status(200).json(getComment);
});
module.exports.OneComment =asyncWrapper(async(req,res,next)=>{
  const{blogId,commentId}=req.params
  const singleComment =await db.comment.findUnique({
    where:{id:+commentId,blogId:+blogId,userId:req.User.id},
    include:{
      user:true
    }
  })
  res.status(200).json(singleComment)
})

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
  const { error } = validateComment(req.body);
  if (error) {
    return next(createCustomError(error.message, 400));
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

// search endpoint
module.exports.getSearch =asyncWrapper(async(req,res,next)=>{
  const{search} =req.query
  if(!search){
    return next(createCustomError("query parameter is required",404))
  }
  // find the query string
  const searchItem =await db.blog.findMany({
    where:{
      title:{
        contains:search.toString(),
        mode:"insensitive"
      }
    }
  })
  return res.status(200).json(searchItem) 
})


// delete his/her comment
module.exports.deleteComment = asyncWrapper(async (req, res, next) => {
  const { blogId, commentId } = req.params;
  const deleteComment = await db.comment.deleteMany({
    where: {
      AND: [{ id: +commentId }, { userId: req.User.id }, { blogId: +blogId }],
    },
  });
  // if (!deleteComment) {
  //   return next(createCustomError("no user id found", 404));
  // }
  if (deleteComment.count === 0) {
    return next(createCustomError("Comment not found or you do not have permission to delete", 404));
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

  if (!unlike) {
    return next(createCustomError("error has occured", 404));
  }
  res.status(200).json(unlike);
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
