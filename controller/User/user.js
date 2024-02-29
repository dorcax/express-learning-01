const db = require("../../config/db");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const cookie =require("cookie-parser")
const asyncWrapper = require("../../middleware/asyncWrapper");
const { customApiError, createCustomError } = require("../../middleware/customApiError");
const {
  validateSignup,
  validateSignIn,
} = require("../../validation/userValidation");
// an endpoint to create user
module.exports.createUser = asyncWrapper(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  // validate using joi
  const { error } = validateSignup(req.body);
  if (error) {
    return next(createCustomError(error.message, 400));
  }
  //  check if user already exist
  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return next(createCustomError("User already exists", 409));
  }
  const hashedPassword = await argon2.hash(req.body.password);
  console.log(name, email, password);
  const user = { name, email, password: hashedPassword, role };

  const newUser = await db.user.create({
    data: { ...user },
  });
  console.log(newUser);
  res.status(201).json("User successfully registered");
});

// user endpoint to login
module.exports.loginUser = asyncWrapper(async (req, res, next) => {
  // try {

  // validate using joi
  const { error,value } = validateSignIn(req.body);
  if (error) {
    return next(createCustomError
      (error.message, 400));
  }
  const { email, password } = value
  // find user email
  const User = await db.user.findUnique({
    where: { email: email },
  });
  console.log(User);
  if (!User) {
    return next(createCustomError("user does not exist", 404));
  }
  // verify the password
  const IsMatch = await argon2.verify(User.password,password);
console.log(IsMatch)
  if (!IsMatch) {
    return next(createCustomError("Invalid username or password", 401));
  }
  // create token
  const createToken = jwt.sign(
    { email: User.email, id: User.id, name: User.name, role: User.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  console.log(createToken
    )
   res.cookie("token",createToken,{
    httpOnly:true,
    maxAge:1000*60*60*24
  })
  return res.status(200).json({user:User });
});

// an endpoint to deleteUser
module.exports.deleteUser = asyncWrapper(async (req, res, next) => {
  const deleteuser = await db.user.delete({
    where: { id: req.User.id },
  });
  if (!deleteuser) {
    return next(
      createCustomError("no user is found with that particular id", 404)
    );
  }

  return res.status(200).json(deleteuser);
});
