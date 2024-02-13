const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const UserAuth =require("./Router/UserRouter")
const blogRoute =require("./Router/blogRouter")
const Auth =require("./middleware/Auth")
const uploadImage =require("./Router/uploadRouter")
const fileUpload =require("express-fileupload")
dotenv.config();

app.use(bodyParser.json());






// 1. create an endpoint to publish a blog - (make sure its the user that created the blog that pubslishes it)-----
// 2. create endpoint for a user to comment on a blog -------
// and delete his/her comment --------
// 3. Create enpoint for user to unlike-------
// 4. Fetch only published blogs ---------
// 5.user can upload picture
// 6.add jwt-----
// 7.login and register user----
// edit blog-------------------------
// 9.delete blog -------

// and delete user--------------------------------
// 10.edit comment------------
app.use(fileUpload())
app.use(express.static("./Image"))
app.use("/user",UserAuth)
app.use("/blog",Auth,blogRoute)
// app.post("/upload",(req,res)=>{
//   console.log(req.file)
// res.send("wow")
// })

app.use("/uploads",uploadImage)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
