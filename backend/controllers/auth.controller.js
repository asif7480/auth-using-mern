const asyncHandler = require("express-async-handler")
const User = require("../models/user.model")
const bcrypt = require("bcryptjs")
const generateToken = require("../utils/generateToken")

const registerUser = asyncHandler( async(request, response) => {
    const { username, email, password } = request.body

    if(!username || !email || !password){
        response.status(400)
        throw new Error("Input all fields")
    }   
    
    const user = await User.findOne({ username })
    if(user){
        response.status(400)
        throw new Error("User already registered")
    }

    const hashPassword = await bcrypt.hash(password, 10)
    
    const newUser = await User.create({
        username,
        email,
        password: hashPassword
    })

    response.status(201).json(newUser)

})

const loginUser = asyncHandler( async(request, response) => {
    const { username, password } = request.body

    if(!username || !password){
        response.status(400)
        throw new Error("Input all fields")
    }
    
    const user = await User.findOne({ username })
    
    const matchPassword = await bcrypt.compare(password, user.password)

    if(!user || !matchPassword){
        response.status(400)
        throw new Error("invalid username or password")
    }


    response.status(200).json({
        username: user.username,
        email: user.email,
        token: generateToken(user._id)
    })

})

const currentUser = asyncHandler( async(request, response) => {
    const user = await User.findById(request.user.id).select("-password")
    
    response.status(200).json(user)
})


module.exports = {
    registerUser,
    loginUser,
    currentUser
}