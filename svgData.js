const router = require("express").Router();

const  emoji_data = require("./data")
 

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