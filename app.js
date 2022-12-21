const express = require("express");
const app = express();
const mongoose = require("mongoose");
if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"config.env"})
}
const port = process.env.port||5000;
// const temp = require("./keys");

mongoose.set('strictQuery', false)
const db = process.env.MONGODBURI;
console.log(db)
const connectDatabase =async()=>{
    try {
        await mongoose.connect(db);
        console.log('MongoDB is Connected...')
    } catch (err) {
        console.error(err.message);
        console.log('Check Your ENV VAR')
        process.exit(1)
    }
}
connectDatabase();

console.log(db)
console.log(process.env.JWT_SECRET)

// const router = require("./routing/routing");
// password: GdDjvyg5snEru0gC
// mongoose.connect(process.env.MONGODBURI,
//     {useNewUrlParser:true,
//         useUnifiedTopology:true
//     })
    // mongoose.set('strictQuery', false)
//     mongoose.connection.on('connected',()=>{
//         console.log("connected to database wohoo!")
//     })
//     mongoose.connection.on('err',(err)=>{
//         console.log("error occured", err)
//     })
require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routing/authentication"))
app.use(require("./routing/post"))
    
app.get("/",(req,res)=>{
    res.send("i am from instaclone project!!!")
})
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}
app.listen(port,()=>console.log("server is up at port", port))