const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const login = require('../models/schemalogin')


route.get('/',async(req,res )=>{
   
    try {
        const getsign= await login.find()
        res.status(201).json(getsign) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.get('/:id',async(req,res )=>{
   
    try {
        const getid= await login.findById(req.params.id)
        res.status(201).json(getid) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.post('/',async(req,res )=>{
   
    try {
        const {name,email,password}=req.body
        const postsign= await login.create({name,email,password})
        res.status(201).json(postsign) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.put('/:id',async(req,res )=>{
   
    try {
        const putsign= await login.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json(putsign) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.delete('/:id',async(req,res )=>{
   
    try {
         await login.findByIdAndDelete(req.params.id)
        res.status(201).end()
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


module.exports=route;
