const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
     user :{
         type:mongoose.Schema.Types.ObjectId,
         ref:'user',
         required:true
        

     },
     products :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true
        
     },
     quantity:{type:Number,default:1},
     time :{type:Date,default:Date.now}
});
module.exports=mongoose.model('orders',orderSchema);