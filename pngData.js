const router = require("express").Router();
const { resolveSoa } = require("dns");
var fs = require('fs');
let rawdata = fs.readFileSync('emoji_data.json');
let emoji_data = JSON.parse(rawdata);
 

router.get('/:name',(req,res)=>
{
   try
   {
        var name = req.params.name;
        let respondList = new Array();
        for(let i = 0; i < emoji_data.length; i++)
        { 
            let item = emoji_data[i];
        
            if(item.name === name)
            {
                respondList.push(item.png);
            }
        }     
        res.status(200).json(respondList);   
   }
   catch(err){
        res.status(500).json(err);
   }
   
})

router.get('/:category',async(req,res)=>
{
    try
    {
        var category = req.params.category;
        let respondList = new Array();
        for(let i = 0; i < emoji_data.length; i++)
        { 
            let item = emoji_data[i];
            
            if(item.category === category.toLowerCase())
            {
                respondList.push(item.png);  
            }
        }     
        res.status(200).json(respondList);   
    }
    catch(err){
        res.status(500).json(err);
    }  
})

router.get('/:subcategory',async(req,res)=>
{
    try
    {
        var sub_category = req.params.subcategory;
        let respondList = new Array();
        for(let i = 0; i < emoji_data.length; i++)
        { 
            let item = emoji_data[i];
            
            if(item.sub_category === sub_category.toLowerCase())
            {
                respondList.push(item.png);  
            }
        }     
        res.status(200).json(respondList);   
    }
    catch(err){
        res.status(500).json(err);
    }  
})

module.exports = router;