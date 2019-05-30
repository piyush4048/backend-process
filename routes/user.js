const express =require('express');
const router =express.Router();
const mongoose =require('mongoose');
const Model = require('../models/Model');


router.get('/',function(req,res){
    res.send("user's home").status(200);
});


router.post('/',function(req,res){
    const newUser =new Model({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    Model.find({email:req.body.email})
    .exec()
    .then(users=>{
        if(users.length>0){
            res.send("Account already exists").status(400);
        }
        else{
            newUser.save();
            res.send("Account created").status(201);
        }
    })
     .catch(err=>{
         console.log(err);
     })
});

//router.post('/',function(req,res){
 //   console.log(req.body);
  //  res.json(req.body).status(200);
//});np
module.exports=router;