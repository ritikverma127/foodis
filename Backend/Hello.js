const express=require('express');
const server=express();
const mongoose  = require('mongoose')
server.use(express.json())
const cors=require('cors');
server.use(cors());

server.listen(8000,()=>{
    console.log('Server Started');
    
})

server.post('/demo',(req,res)=>{
    console.log('Hiiiiiiiiiii')
const id=new Clients({
    name:req.body.name,
    username:req.body.username,
    password:req.body.password,
})
id.save();
console.log(id);
res.send(id);
})

mongoose.connect('mongodb+srv://rajeevgood134:Ritik%401234@client.ibgxz1s.mongodb.net/')
.then((res)=>console.log('Database Connected'))
.catch(err=>console.log(err));
const Schema=new mongoose.Schema(
{
name:String,
username:String,
password:String
})
const Clients = mongoose.model('demo',Schema);

// ******************* Mongodb Data store Place ***********************
// https://cloud.mongodb.com/v2/66323d3cc2809951b42dba9c#/metrics/replicaSet/66324004c47c640ea2be0e24/explorer/test/demos/find
// ******************* Mongodb Data store Place ***********************


// ****************************  Login Page   *********************
server.post('/login',(req,res)=>{
    const {username,password}=req.body;
    Clients.findOne({username:username})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("success Password Match")
            }
            else{
                res.json("The password is incorrect ")
            }
    
        }else{
    res.json('No Record Exisiting User')
        }
    })
   
    })
// ***********************************************************************