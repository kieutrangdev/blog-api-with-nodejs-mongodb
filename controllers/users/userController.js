const bcrypt = require("bcryptjs");
const User = require("../../model/User/User");
const {appErr, AppErr} = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeader = require("../../utils/getTokenFromHeaders");
const userRegisterCtrl = async (req, res, next) => {
  const { firstName, lastName, profilePhoto, email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(new AppErr("User Already Exist", 500))
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create the user
    const user = await User.create({
      firstName,
      lastName,
      profilePhoto,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    next(appErr(error.message));
  }
};
const userLoginCtrl = async (req, res) => {
  const { email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email: email });

    if(!userFound)
    {
      return res.json({
        msg: "Invalid login"
      })
    }

    const isPasswordMatched = await bcrypt.compare(
      password,
      userFound.password
    );
    
    if(!isPasswordMatched) {
      return res.json({
        msg: "Invalid login"
      })
    }
    res.json({
      status: "success",
      data: {
        firstName: userFound.firstName,
        lastName : userFound.lastName,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
        token: generateToken(userFound.id)
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userGetCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "Profile route",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userProfileCtrl = async (req, res) => {
  try {
    // get token from header
    const user = await User.findById(req.userAuth)
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userDeleteCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user delete",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userUpdateCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "update user delete",
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  userRegisterCtrl,
  userLoginCtrl,
  userGetCtrl,
  userProfileCtrl,
  userDeleteCtrl,
  userUpdateCtrl,
};
