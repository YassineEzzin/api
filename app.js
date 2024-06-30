const express = require('express')
const mongoose = require('mongoose')
const app=express()
port = 3000
app.listen(port,()=>{
    console.log('from serveur')
})
mongoose.connect('mongodb://localhost:27017')
app.use(express.json())