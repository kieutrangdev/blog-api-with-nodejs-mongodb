const { appErr } = require("../utils/appErr")
const getTokenFromHeader = require("../utils/getTokenFromHeaders")
const verifyToken = require("../utils/verifyToken")

const isLogin = (req, res, next) => {
    //get token from header
    const token = getTokenFromHeader(req)
    const decodedUser = verifyToken(token)
    //save the user into req obj
    req.userAuth = decodedUser.id
    if(!decodedUser) {
        return next(appErr("Please login again", 500))
    }
    else {
        next();
    }
    //verify the token
}

module.exports = isLogin