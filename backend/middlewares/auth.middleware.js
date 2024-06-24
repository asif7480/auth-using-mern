const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/user.model")

const validateToken = asyncHandler(async(request, response, next) => {
    let token

    if(request.headers.authorization && request.headers.authorization.startsWith("Bearer")){
        try{
            token = request.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            console.log(decoded);
    
            request.user = await User.findById(decoded.id).select("-password")
            next()
        }catch(err){
            console.log(err);
            response.status(401)
            throw new Error("Not authorized")
        }
    }

    if(!token){
        response.status(401)
        throw new Error("Not authorized, no token")
    }
})

module.exports = validateToken