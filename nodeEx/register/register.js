let express = require('express');
let router = express.Router();
let mongo = require("mongodb");
const { token } = require('../config/token');
let Manoj = mongo.MongoClient;
let register= router.post('/',(req,res)=>{
    console.log("postcall");
    Manoj.connect("mongodb://localhost:27017/sms",(err,db)=>{
    if(err) throw err;
    else{
        db.collection("user_register").count({"uname":req.body.uname}).then((count)=>{
            if(count>0){
              res.send('User Alreay exist, Plz try with another User Name');
            }
            else{
                db.collection("user_register").insertOne({
                    "ufirst":req.body.ufirst,
                    "ulast":req.body.ulast,
                    "uname":req.body.uname,
                    "upwd":req.body.upwd
                },(err,response)=>{
                    if(err) throw err;
                    else{
                        res.send({"register":"success"});
                    }
                });

            }
        })
        
    }
    })
    /*if(req.body.uname == "admin" & req.body.upwd == "admin"){
        res.status(200).send(
            {
                ufirst:req.body.ufirst, 
                ulast:req.body.ulast
            
            })
        }else{
            res.status(500).send("not working");
        }
       
    */
    })    


module.exports = register;



 /* if(req.body.ufirst == "venkey"){
    res.status(200).send(
        {
            ufirst:req.body.ufirst, 
            ulast:req.body.ulast
        
        })
    }else{
        res.status(500).send("not working");
    }*/
   // res.send("post call is working");