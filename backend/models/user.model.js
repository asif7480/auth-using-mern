const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: [true, "email is required"],
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "password is required"],
            trim: true,
        },
    }, 
    { timestamps: true }
)

const User = mongoose.model("User", userSchema)
module.exports = User