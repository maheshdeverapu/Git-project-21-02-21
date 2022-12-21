const express = require("express");
const router = express.Router();
const User = require("../models/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const {JWT_SECRET} = require("../keys");
const userLogin = require("../middleware/userLogin");

router.get("/home",(req,res)=>{
    res.send("done")
})

router.get("/protected",userLogin,(req,res)=>{
    res.send("i am protected!");
})

router.post("/signup",async(req,res)=>{
    try{
    console.log(req.body);
   const {name, email, password} = req.body;
    if(!name || !email || !password){
    return res.status(421).json({error:"please add all the fields"})
    }
    let user = await User.findOne({email:email});
    if(user){
        return res.status(400).json({
            status:"Failed",
            message:"email already exists, Please try another or login with the same!"
        })
    }
    bcrypt.hash(password,10,async(err,hash)=>{

        user = await User.create({
            name,
            email,
            password:hash
        });
        res.json({
            status:"success",
            message:"successfully registered",
            user
        })
    })
 }catch(e){
    res.json({
        status:"Failed",
        message:e.message
    })
}
})

router.post("/signin",async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({
            status:"Failed",
            message:"please fill all required credentials"
        })
    }
    let user = await User.findOne({email:email})
    if(!user){
        return res.status(422).json({
            status:"Failed",
            message:"invalid email or password"
        })
    }
    let loginPassword = await bcrypt.compare(password,user.password) 
    if(!loginPassword){
        return res.status(422).json({
            status:"Failed",
            message:"invalid email or password"
        })
    }
    // console.log(JWT_SECRET)
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
    res.json({
        token
    })
})

module.exports = router;