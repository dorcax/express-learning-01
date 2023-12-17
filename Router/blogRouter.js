const express=require("express")
const router =express.Router()
const blogRouter =require("../controller/Blog/blog")



router.route("/:userId")
      .post(blogRouter.createBlog)
router.route("/uploads")
       .post(blogRouter.uploadImage)
router.route("/")
      .get(blogRouter.getBlog)
router.route("/:blogId/like/:userId")
       .post(blogRouter.createLike)
router.route("/:blogId/comment/:userId")
       .post(blogRouter.commentBlog)
router.route("/:blogId/:userId")
       .patch(blogRouter.publishBlog)
       .delete(blogRouter.deleteBlog)
       .get(blogRouter.getPublishedBlog)
router.route("/:blogId/edit/:userId")
       .patch(blogRouter.editBlog)
router.route("/:blogId/:userId/comment/:commentId") 
       .patch(blogRouter.editComment)
       .delete(blogRouter.deleteComment) 
router.route("/:blogId/:userId/like/:likeId")
      .delete(blogRouter.deleteLike)   
router.route("/book")
       .get(blogRouter.getDetails)


module.exports=router

