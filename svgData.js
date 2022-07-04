const router = require("express").Router();
var fs=require('fs');
let rawdata = fs.readFileSync('data.json');
let emoji_data = JSON.parse(rawdata);
 

router.get('/:name',(req,res)=>
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

module.exports = router;