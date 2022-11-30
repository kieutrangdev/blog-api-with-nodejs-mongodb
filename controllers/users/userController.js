const User = require('../../model/User/User')

const userRegisterCtrl = async (req, res) => {
  const {firstName, lastName, profilePhoto, email, password} = req.body
  try {
    //check if email exist
    const userFound = await User.findOne({email})
    if(userFound) {
      return res.json({
        msg: 'User Alread Exist'
      })
    }

    //hash password


    //create the user
    const user = await User.create({
      firstName, 
      lastName, 
      profilePhoto, 
      email, 
      password
    })
    res.json({
      status: "success",
      data: user ,
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userLoginCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "user login",
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
    res.json({
      status: "success",
      data: "users route",
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
  }

module.exports = {
  userRegisterCtrl,
  userLoginCtrl,
  userGetCtrl,
  userProfileCtrl,
  userDeleteCtrl,
  userUpdateCtrl
};
