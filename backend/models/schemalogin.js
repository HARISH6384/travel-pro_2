 
const mongoose = require('mongoose')

const login = new mongoose.Schema({

    email:String,
    password:Number
})


module.exports=mongoose.model('travelgo',login)