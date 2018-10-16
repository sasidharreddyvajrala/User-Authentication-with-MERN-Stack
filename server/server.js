var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/Todomodels');
var {Users}=require('./models/Usersmodels');

var app=express();

app.use(bodyParser.json());


app.post('/todos',(req,res)=>{
       var todo= new Todo({
           text:req.body.text
       });

       todo.save().then((doc)=>{
           res.send(doc);
       },(e)=>{
           res.send(400).send(e);
       })
       
});

app.listen(3000,()=>{
    console.log('Server is up and running.');
});

module.exports={app};
