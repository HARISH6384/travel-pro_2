 
const mongoose = require('mongoose')

const signup = new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})


module.exports=mongoose.model('travelgo',signup)