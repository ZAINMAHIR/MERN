const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynHandler = require('express-async-handler')
const User = require('../models/userModel')
// register a new user 
// use POST /api/users
const registerUser = asynHandler(async(req, res)=>{
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all field')
    }
    // to check if user already exist 
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hashing the password using bycrypt
    // using the default 10 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // creating a user 
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('INVALID User data')
    }
})

// Authenticate a new user 
// use POST /api/users/login
const loginUser = asynHandler(async(req, res)=>{
    const {email, password} = req.body

    // Check for user email
    const user = await User.findOne({ email });
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })
  

// get user data 
// use GET /api/users/me
//@acess privat showing how to protect routes 
const getMe = asynHandler(async(req, res)=>{
    const { _id, name, email, } = await User.findById(req.user.id)

    res.status(200).json({
        id:_id,
        name,
        email,
    })
})
// creating a separate function to be used in login and register to gen a token 
const generateToken = (id) => {
    //having issue of string undefined when passing process.env
    return jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`,{
      expiresIn: '30d',
    })
  }
module.exports = {
    registerUser,
    loginUser,
    getMe,
}