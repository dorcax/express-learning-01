const express=require("express")
const router =express.Router()
const blogRouter =require("../controller/Blog/blog")
const {Authentication,Authrestrict} =require("../middleware/Auth")
const upload =require("../multer.js")


router.post("/",Authentication,Authrestrict("ADMIN"),upload.single("imageUrl"),blogRouter.createBlog)

router.get("/",Authentication,blogRouter.getBlog)
router.get("/search",blogRouter.getSearch)
router.route("/:blogId/like")
       .post(Authentication,blogRouter.createLike)
router.route("/:blogId/comment")
       .post(Authentication,blogRouter.commentBlog)
       .get(Authentication,blogRouter.getComment)
router.route("/:blogId")
       .patch(Authentication,Authrestrict("ADMIN"),blogRouter.publishBlog)
       .delete(Authentication,Authrestrict("ADMIN"),blogRouter.deleteBlog)
       .get(Authentication,blogRouter.getPublishedBlog)
router.route("/:blogId/edit")
       .patch(Authentication,Authrestrict("ADMIN"),blogRouter.editBlog)
router.route("/:blogId/comment/:commentId") 
       .patch(Authentication,blogRouter.editComment)
       // .get(Authentication,blogRouter.getComment)
       .delete(Authentication,blogRouter.deleteComment) 
router.route("/:blogId/like/:likeId")
      .delete(Authentication,blogRouter.deleteLike) 

// searchrouter
 


module.exports=router

