import mongoose, { model } from "mongoose"

const UsersSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number
})

const UserModel = mongoose.model('user',UsersSchema)
model.exports = UserModel