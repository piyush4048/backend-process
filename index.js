const express=require('express');
const morgan=require('morgan');
const parser=require('body-parser');
const mongoose =require('mongoose');
//let count =0;
const app=express();
const port=1234;
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://guptajiiiiii:Piyushgupta@cluster0-m9g4a.mongodb.net/test?retryWrites=true" ,{ useNewUrlParser: true },function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log('Altas connected');
  }
});
const user=require('./routes/user');
const products=require('./routes/products');
// products=require('./routes/products');
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();
});
app.use('/user',user);
app.use('/products',products);

//app.use('/products',products);
//app.get('*',function(req,res,next){
  //  count++;
  //  next();
//});
//app.get('/',function(req,res){
  //  res.send("world!").status(200);
//});
//app.get('/test',function(req,res){
//    res.send("at test endpoint").status(200);
//});
//app.get('/count',function(req,res){
  //  res.send(count.toString()).status(200);
//});
app.listen(port,function(){
      console.log(`server is listening on ${port}`);
});
//app.get('/404',function(req,res){
 //   count=count-2;
//});