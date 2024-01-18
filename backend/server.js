const express = require('express')
const colors = require('colors')
const connectDb = require('./config/db')
const dotenv = require('dotenv').config()
const{errorHandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT || 5000

connectDb()

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use("/api/goals",require("./routes/goalRoutes"))
//will also overwirte the default express error handler
app.use(errorHandler)
app.listen(port, ()=> console.log(`server started on port ${port}`))
