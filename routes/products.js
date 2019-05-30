const express =require('express');
const router =express.Router();
const mongoose =require('mongoose');
const productModel = require('../models/productModel');

router.get('/',function(req,res){
    res.send("products's home").status(200);
}); 

router.post('/',function(req,res){
    const newProduct =new productModel({ 
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
        });
        var count=0;
        productModel.find({name:req.body.name})
        .exec()
        .then(productss=>{
            if(products.length>0){
                res.send("product already exists and count is =").status(400);
                count++;
                res.send(count);
            }
            else{
                newProduct.save();
                res.send("product newely added ").status(201);
                count=1;
                res.send(count);
            }
        })
         .catch(err=>{
             console.log(err);
         })
        });

module.exports=router;
