let express = require("express");
let router = express.Router();
let generateToken = require("../config/generateToken");
let mongo = require("mongodb");
let Manoj = mongo.MongoClient;
let obj = require("../config/token");

let login = router.post('/',(req,res)=>{
    Manoj.connect("mongodb://localhost:27017/sms",(err,db)=>{
        if(err) throw err;
        else{
            console.log(req.body.uname);
            db.collection("user_register").find({"uname":req.body.uname} && {"upwd":req.body.upwd}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        let token = generateToken(
                            {
                                "uname":req.body.uname,
                                "upwd":req.body.upwd
                            },"manoj@gmail.com"
                        );
                        obj.token = token;
                        res.send({"login":"Success",
                                    "token":token})
                        
                    }
                }
            })
        }
    })
    /*if(req.body.uname == "admin" & req.body.upwd == "admin" ){
        console.log("post call");
        let token=generateToken(
            {"uname":req.body.uname,
              "upwd":req.body.upwd
            },
            "messageservice"
           );
       obj.token = token;
       res.send({
        "login":"success",
        "token":token
    });
    }else{
        console.log("post call else block");
        res.status(500).send("Please enter right credentials");
    }*/
})

module.exports = login;