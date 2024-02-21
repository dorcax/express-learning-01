const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const UserAuth =require("./Router/UserRouter")
const blogRoute =require("./Router/blogRouter")
const Auth =require("./middleware/Auth")
const notFound =require("./middleware/not-Found");
const errorHandler = require("./middleware/errorHandler");
dotenv.config();

app.use(bodyParser.json());






app.use("/user",UserAuth)
app.use("/blog",blogRoute)



app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
