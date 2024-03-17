const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const UserAuth =require("./Router/UserRouter")
const blogRoute =require("./Router/blogRouter")
const notFound =require("./middleware/not-Found");
const errorHandler = require("./middleware/errorHandler");
dotenv.config();
const cookieParser=require("cookie-parser")
const cors =require("cors")

app.use(bodyParser.json());
const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cookieParser());

// app.use(cors({
//   origin:'http://localhost:4000', 
//   credentials:true,            //access-control-allow-credentials:true
//   // optionSuccessStatus:200
// }
// ))



app.use("/user",UserAuth)
app.use("/blog",blogRoute)



app.use(notFound)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
