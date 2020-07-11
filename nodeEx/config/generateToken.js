let jwt = require("jwt-simple");
let generateToken = (data,password)=>{
    return jwt.encode(data,password);
};
module.exports=generateToken;