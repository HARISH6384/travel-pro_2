const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const sign = require('../models/schemasign')


route.get('/',async(req,res )=>{
   
    try {
        const getsign= await sign.find()
        res.status(201).json(getsign) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.get('/:id',async(req,res )=>{
   
    try {
        const getid= await sign.findById(req.params.id)
        res.status(201).json(getid) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.post('/',async(req,res )=>{
   
    try {
        const {name,email,password}=req.body
        const postsign= await sign.create({name,email,password})
        res.status(201).json(postsign) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.put('/:id',async(req,res )=>{
   
    try {
        const putsign= await sign.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json(putsign) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

route.delete('/:id',async(req,res )=>{
   
    try {
         await sign.findByIdAndDelete(req.params.id)
        res.status(201).end()
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})


module.exports=route;
