const express =require('express');
const router =express.Router();
const mongoose =require('mongoose');
const productModel = require('../models/productModel');

router.get('/',function(req,res){
    //res.send("products's home").status(200);
    productModel.find()
    .exec()
    .then(kuchbhi=>{
        res.send("kuchbhi").status(200);
    })
});
router.get('/:productID',function(req,res){
    const id=req.params.productID;
    productModel.findById(id)
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
});

router.delete("/:productID",function(req,res){
    const id=req.params.productID;
    productModel.deleteOne({_id:id}) 
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});

router.put('/:productId',function(req,res){
    const id=req.params.productID;
    const newPrice=req.body.price;
    productModel.updateOne({_id:id},{$set:{price:newPrice}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});

router.post('/',function(req,res){
    const newProduct =new productModel({ 
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
        });
        newProduct.save(function(err,newEntry){
          if(err){
              res.json(err).status(400);
          }else{
              res.json(newEntry).status(201);
          }
        })

        });

module.exports=router;