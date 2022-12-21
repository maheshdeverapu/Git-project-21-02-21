// const express = require("express");
const jwt = require("jsonwebtoken");
// const {JWT_SECRET} = require("../keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");
// const userLogin = express();
// module.exports = (req,res,next)=>{
const userLogin = (req,res,next)=>{
    const {authorization} = req.headers;
    if(!authorization){
       return res.status(401).json({
            error:"you must be logged in"
        })
    }
    // console.log(req.headers)
    // console.log(authorization)
    const token = authorization.replace("Bearer ","");
    // const token = authorization;
    // const token = authorization.split("Bearer ")[1];
    // console.log(token.type,token)
    jwt.verify(token,process.env.JWT_SECRET,async(err,payload)=>{
        
        // console.log(payload)
        if(err){
            console.log(err)
            return res.status(422).json({
                status:"Failed",
                message:err
            })
        }
        // const x = await payload;
        const {_id} = payload;
        const user = await User.findById(_id);
        req.user = user;
        // User.findById(_id).then(userdata=>{
        //     console.log(userdata,req.user)
        //     req.user = userdata;
        // })
        next();
    })
}

module.exports = userLogin;