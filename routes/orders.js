const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const orderModel=require("../models/orderModel");

router.get('/',function(req,res){
    orderModel.find()
    .populate('user','-password')
    .populate('products') 
    .exec()
    .then(orders=>{ 
        res.json(orders).status(200);
    })
});


router.post('/',function(req,res){
    const newOrder =new orderModel({
        _id: new mongoose.Types.ObjectId(),
        user:req.body.user,
        products:req.body.products,
        quantity:req.body.quantity
    }); 

    newOrder.save(function(err,newEntry){
         if(err){
             res.json(err).status(400);
         }else{
             res.json(newEntry).status(201);
         }
    })
});

//router.post('/',function(req,res){
 //   console.log(req.body);
  //  res.json(req.body).status(200);
//});np
module.exports=router; 
