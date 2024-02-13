const db = require("../../config/db");
const path =require("path")



// an endpoint to create blog
module.exports.createBlog= async (req, res) => {
  const { userId } = req.params;
    const { title, content } = req.body;
    const image =req.files.image
    console.log(req.files)
    // mmm ,,,mm
    // const imagepath  =path.join(__dirname,"../../Image/uploads/" +`${image.name}`)
    const newBlog = await db.blog.create({
      data: {
        title,
        content,
        image:`uploads/${image.name}`,
        user: {
          connect: {
            id: +userId,
          },
        },
      },
    });
    
  await image.mv("../uploads/"+`${image.name}`)
   return res.status(200).json(newBlog);
  }
  module.exports.uploadImage =async(req,res)=>{
  // console.log(req)
  // res.status(200).jmso mn("image upload successfully")
res.send("wow")
}
  // an endpoint to get a blog
  module.exports.getBlog= async (req, res) => {
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
  };
  // an endpoint to like a blog 
module.exports.createLike= async (req, res) => {
    const { blogId, userId } = req.params;
  
    const likedBefore = await db.like.findFirst({
      where: { AND: [{ blogId: +blogId }, { userId: +userId }] },
    });
  
    if (likedBefore)
      res.status(400).json({ message: "You have liked this blog before" });
  
    const like = await db.like.create({
      data: {
        blog: {
          connect: {
            id: +blogId,
          },
        },
        user: {
          connect: {
            id: +userId,
          },
        },
      },
    });
  
    res.status(201).json(like);
  };
  




  // create an endpoint to publish a blog - (make sure its the user that created the blog that pubslishes it
module.exports.publishBlog=async(req,res)=>{
  const {userId,blogId} =req.params
  const publishedBlog =await db.blog.updateMany({
    where:{id:+blogId,userId:+userId},
    data:{
      isPublished:true
    }
  })
  res.status(200).json("blog published")
}
// Fetch only published blogs
module.exports.getPublishedBlog=async(req,res)=>{
  const{blogId,userId} =req.params
  const getblog =await db.blog.findMany({
    where:{AND:[{id:+blogId},{userId:+userId},{isPublished:true}]}

  })
res.status(200).json(getblog)
}
// create endpoint for a user to comment on a blog and delete his/her comment
module.exports.commentBlog =async(req,res)=>{
  const {userId,blogId} =req.params
const{content} =req.body
  const createComment =await db.comment.create({
     data:{
         ...req.body,
      user:{
        connect:{
          id:+userId
        }
      },
      Blog:{
        connect:{
          id:+ blogId
        }
      }
     }


    
   })
  // console.log("haa")
  res.status(200).json("comment created")
}

// edit blog
module.exports.editBlog =async(req,res)=>{
  const{userId,blogId} =req.params
  const Editblog =await db.blog.updateMany({
  where:{AND:[{id:+blogId},{userId:+userId}]},
  data:{
    ...req.body
  }
  })
  res.status(200).json(Editblog)
}


// edit comment

module.exports.editComment =async(req,res)=>{
  const{userId,blogId,commentId} =req.params
  const editComment =await db.comment.updateMany({
    where:{AND:[{id:+commentId},{blogId:+blogId},{userId:+userId}]}
  ,data:{
    ...req.body
  }
  })
  res.status(200).json(editComment)
}




// delete his/her comment 
module.exports.deleteComment =async(req,res)=>{
  const{blogId,userId,commentId} =req.params
  const deleteComment=await db.comment.deleteMany({
    where:{AND:[{id:+commentId},{userId:+userId},{blogId:+blogId}]}
  })

  res.status(200).json("comment deleted")
}
// 3. Create enpoint for user to unlike
module.exports.deleteLike =async(req,res)=>{
  const{blogId,likeId,userId} =req.params
  const unlike =await db.like.deleteMany({
    where:{AND:[{id:+likeId},{blogId:+blogId},{userId:+userId}]}
  })
  res.status(200).json(unlike)
}

// an endpoint to delete blog

module.exports.deleteBlog=async(req,res)=>{
  const{blogId,userId}=req.params
  const deleteBlog =await db.blog.deleteMany({
    where:{AND:[{id:+blogId},{userId:+userId}]

    }
  })
  res.status(200).json("blog deleted")
}




  module.exports.getDetails =(req,res)=>{
    res.send(req.User)
  }