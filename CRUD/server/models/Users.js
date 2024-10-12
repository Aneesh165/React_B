const mongoose =require('mongoose')

const UsersSc = new mongoose.Schema({
    name: String,
    email:String,
    age:Number
})