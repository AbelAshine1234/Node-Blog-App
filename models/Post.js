const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true },
    desc:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    categories:{
        type:Array
    }
   
},{timestamps:true})
module.exports  = mongoose.model("Post",postSchema)