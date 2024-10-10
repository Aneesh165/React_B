const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app =express()
app.use(cors()) //server side in frontend
app.use(express.json) //D from front to back

//running server
app.listen(3001,()=>{
    console.log("server is runnig----");
    
} )