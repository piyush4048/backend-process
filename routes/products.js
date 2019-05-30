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
<<<<<<< HEAD
        newProduct.save(function(err,newEntry){
          if(err){
              res.json(err).status(400);
          }else{
              res.json(newEntry).status(201);
          }
=======
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
>>>>>>> f6880b449dffe30047fae09772f9960e7972ca51
        })

        });

module.exports=router;
