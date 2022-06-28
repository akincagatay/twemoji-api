var fs=require('fs');
const express = require("express");
let rawdata = fs.readFileSync('data.json');
let emoji_data= JSON.parse(rawdata);



var app = express();

 
app.listen(8080, function(){
   console.log("working")
})

app.get("/api/allData",function(req, res){
    res.send(emoji_data);
 });

 // Get likely
 app.get('/api/allData/:name',(req,res)=>
 {
    var name = req.params.name;
    let gfsList = new Array();
    for(let i = 0; i < emoji_data.length; i++) 
    {  
        let item = emoji_data[i];
        console.log(item)
        if(item.name.includes(name.toLowerCase()))
        {
            gfsList.push(item) 
        }     
    }
	res.status(200).json(gfsList);         
 })

 app.get('/api/svg/:name',(req,res)=>
 {
    var name = req.params.name;
    let gfsList = new Array();
    for(let i = 0; i < emoji_data.length; i++)
    { 
        let item = emoji_data[i];
       
        if(item.name == name)
        {
            gfsList.push(item.svg)  
        }
    }     
	res.status(200).json(gfsList);   
 })
