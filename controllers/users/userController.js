const bcrypt = require("bcryptjs");
const User = require("../../model/User/User");
const { use } = require("../../routers/users/userRoutes");

const userRegisterCtrl = async (req, res) => {
  const { firstName, lastName, profilePhoto, email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.json({
        msg: "User Alread Exist",
      });
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
    res.json(error.message);
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
      data: userFound,
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
  const {id} = req.params 
  try {
    const user = await User.findById(id)
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
