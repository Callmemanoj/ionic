let express = require("express");
var app = express();
const fast2sms = require("fast-two-sms");
require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
var port = 5000;
app.listen(port, () => {
  console.log("port listening to:", port);
});
app.use("/register", require("./register/register"));
app.use("/login", require("./login/login"));
app.use("/contact", require("./contact/contact"));
app.use("/logout", require("./logout/logout"));
app.get("/", (req, res) => {
  res.send("its is working");
});
