const express = require("express")
const dotenv = require("dotenv").config()
const errorHandler = require("./middlewares/error.middleware")
const connectDB = require("./config/db")
const cors = require("cors")

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

connectDB()

app.use("/api/auth", require("./routes/auth.route"))

app.use(errorHandler)
app.listen(port, () => console.log(`Server is running at port: ${port}`))