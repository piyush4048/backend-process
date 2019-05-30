const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
     user :{
         type:mongoose.Schema.Types.ObjectId,
         required:true

     }
     product :{
        type:mongoose.Schema.Types.ObjectId,
        required:true
     }
     quantity:{type:Number,default:1},
     time :{type:DataCue,defaule:Date.now}
});
module.exports=mongoose.model('user',userSchema);