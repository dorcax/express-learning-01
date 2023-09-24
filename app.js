const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const db = require("./config/db");
const app = express();
const port = process.env.PORT || 4000;

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await db.user.create({
    data: { email, name },
  });
  console.log(newUser);
  res.status(201).json(newUser);
});

app.post("/blog/:userId", async (req, res) => {
  const { title, content } = req.body;
  const { userId } = req.params;
  const newBlog = await db.blog.create({
    data: {
      title,
      content,
      user: {
        connect: {
          id: +userId,
        },
      },
    },
  });
  res.status(200).json(newBlog);
});

app.get("/blog", async (req, res) => {
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

app.post("/blog/:blogId/like/:userId", async (req, res) => {
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
});

// Ass
// 1. create an endpoint to publish a blog - (make sure its the user that created the blog that pubslishes it)
// 2. create endpoint for a user to comment on a blog and delete his/her comment
// 3. Create enpoint for user to unlike
// 4. Fetch only published blogs

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
