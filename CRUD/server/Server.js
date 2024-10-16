import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import UserModel from './models/Users.js'

const app =express()
app.use(cors()) //server side in frontend
app.use(express.json) //D from front to back

dotenv.config()

const connect =async()=>{ 
try {
    await mongoose.connect(process.env.Mongo);
    console.log('Connected to MongoDB.');
    
  } catch (error) {
    throw error;
  }
}
mongoose.connection.on("disconnected",()=>{
    console.log('MongoDB is Disconnected');
})

// app.get("/",(req,res)=>{
//     res.send('Hello')
//     console.log('Hello');
    
// })

app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(User => res.json(User))
    .catch(err => res.json(err))
})

//running server
app.listen(process.env.PORT,()=>{
    connect()
    console.log(`server is running  at ${process.env.PORT}.`);
    
} )