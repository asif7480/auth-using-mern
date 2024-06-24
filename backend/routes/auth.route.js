const express = require("express")
const router = express.Router()
const {
    registerUser,
    loginUser,
    currentUser
} = require("../controllers/auth.controller")
const validateToken = require("../middlewares/auth.middleware")

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/user", validateToken, currentUser)


module.exports = router