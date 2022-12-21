const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// const Post = require("../models/post");
const Post = mongoose.model("Post");
const User = mongoose.model("User")
const userLogin = require("../middleware/userLogin")

router.get("/myposts",userLogin,async(req,res)=>{
    try{
    const posts = await Post.find({postedBy:req.user._id})
    res.json({
        posts
    })
}catch(e){
    res.json({status:"Failed",
            message:e.message})
}
})

router.get("/viewPosts",async(req,res)=>{
    try{
    const posts = await Post.find()
    res.json({
        posts
    })
}catch(e){
    res.json({
        status:"Failed",
        message:e.message
    })
}
})

router.post("/createPost",userLogin,async(req,res)=>{
    // console.log(req.body);
    const {title,body,photo} = req.body;
    if(!title || !body){
        return res.status(400).json({
            status:"Failed",
            message:"all fields need to fill"
        })
    }
    console.log(req.user)
    req.user.password = undefined;
    const post = await Post.create({
        title,
        photo,
        body,
        postedBy:req.user.name
    })
    res.json({
        post
    })
})

module.exports = router;
