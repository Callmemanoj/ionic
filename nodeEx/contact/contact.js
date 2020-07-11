let express = require("express");
let mongodb = require("mongodb");
let Kumar = mongodb.MongoClient;
let router = express.Router();
let contact = router.post("/", (req, res) => {
  Kumar.connect("mongodb://localhost:27017/sms", (err, db) => {
    if (err) throw err;
    else {
      db.collection("user_contact").insertOne(
        {
          userid: req.body.uid,
          userobiile: req.body.umobile,
          usermsg: req.body.umsg,
        },
        (err, response) => {
          if (err) throw err;
          else {
            res.send({ contacts: "updated" });
          }
        }
      );
    }
  });
});
module.exports = contact;
