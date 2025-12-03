const express = require('express')
const server = express()
const mongoose = require('mongoose')
const cors = require('cors')
 const sign=require('./models/schemasign')
const travel = require('./routes/sign')
const login = require('./models/schemalogin')
// const sign = require('./models/schemasign')
const travellogin = require('./routes/login')



server.use(cors())
server.use(express.json())
mongoose.connect('mongodb://localhost:27017/TravelGo')
.then(()=>console.log('mongodb is connected'))
.catch((err)=>console.log('mongodb is not connected',err))


server.use('/api/travel',travel)
server.use('/api/travel',travellogin)




server.listen(8000,()=>{
    console.log('server is listening')
})