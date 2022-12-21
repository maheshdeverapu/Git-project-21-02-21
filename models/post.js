// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const ObjectId = mongoose.Types.ObjectId;

const postSchema = new mongoose.Schema({
    title:{type:String, required:true},
    body:{type:String, required:true},
    photo:{type:String},
    postedBy:{type:String, ref:"User"}
})

mongoose.model("Post",postSchema);

// module.exports = Post;