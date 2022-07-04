const express = require("express");
const cors=require('cors');

const allData = require("./allData")
const svgData = require("./svgData")

var app = express();
app.use(cors());
app.set('port', process.env.PORT || 8080);
 
app.listen(app.get('port'), function(){
   console.log("working")
})


app.use("/v1/allData",allData);
app.use("/v1/allData",allData);


