const express = require("express");
const cors = require("cors")
const app = express()
const port = 4001
const mongoose = require("mongoose")
require("dotenv/config")

const ourRoutes = require("./routes/postRoutes")

app.use(express.json())
app.use(cors())
app.use('/' , ourRoutes)
app.use('/post' , ourRoutes)

mongoose.connect(process.env.DATA_BASE, console.log("are you working?"))

app.listen(port, console.log("app is listening to port 4001"))