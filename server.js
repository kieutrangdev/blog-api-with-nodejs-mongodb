const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routers/users/userRoutes");
const postRoutes = require("./routers/posts/postRoutes");
const commentRoutes = require("./routers/comments/commentRoutes");
const categoryRoutes = require("./routers/categories/categoryRoutes");
dotenv.config();
require("./config/dbConnect");
const app = express();

//middlewares
app.use(express.json())

// const userAuth = {
//   isLogin: true,
//   isAdmin: false
// }

// app.use((req, res, next ) => {
//   if(userAuth.isLogin) {
//     console.log('I was called')
//     next()
//   }
//   else {
//     return res.json({
//       msg: "Invalid login"
//     })
//   }
// })




//routes
//-----
// user router
app.use("/api/v1/users/", userRouter)

//------------- post route
app.use("/api/v1/posts/", postRoutes)

// comment route
app.use("/api/v1/comments/", commentRoutes)


app.use("/api/v1/categories/", categoryRoutes)


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});


