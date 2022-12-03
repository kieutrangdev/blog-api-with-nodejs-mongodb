const express = require("express");
const { userRegisterCtrl, userLoginCtrl, userGetCtrl, userProfileCtrl, userDeleteCtrl, userUpdateCtrl } = require("../../controllers/users/userController");
const isLogin = require("../../middlewares/isLogin");
const userRouter = express.Router();
userRouter.post("/register", userRegisterCtrl);
// đăng nhập
userRouter.post("/login", userLoginCtrl);
// get user
userRouter.get("/profile/",isLogin, userProfileCtrl);
//get all
userRouter.get("/", userGetCtrl);
// xóa user
userRouter.delete("/:id", userDeleteCtrl);
// sửa user
userRouter.put("/:id", userUpdateCtrl);

module.exports = userRouter;
