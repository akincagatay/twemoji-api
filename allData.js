const router = require("express").Router();
var fs=require('fs');
let rawdata = fs.readFileSync('emoji_data.json');
let emoji_data = JSON.parse(rawdata);

router.get("/",async (req, res) =>{
    try{
        res.status(200).json(emoji_data);
    }
    catch(err){
        res.status(500).json(err);
    }
    
 });

 // Get likely
 router.get('/name/:name',(req,res)=>
 {
    try
    {
        var name = req.params.name;
        let respondList = new Array();
        for(let i = 0; i < emoji_data.length; i++) 
        {  
            let item = emoji_data[i];
            if(item.name.includes(name.toLowerCase()))
            {
                respondList.push(item); 
            }     
        }
        res.status(200).json(respondList);   
    }
    catch(err){
        res.status(500).json(err);
    }
          
 })

 router.get('/category/:category',async (req,res)=>
 {
    try
    {
        var category = req.params.category;
        let respondList = new Array();
        for(let i = 0; i < emoji_data.length; i++) 
        {  
            let item = emoji_data[i];
            if(item.category.includes(category.toLowerCase()))
            {
                respondList.push(item) 
            }     
        }
        res.status(200).json(respondList);    
    }
    catch(err){
        res.status(500).json(err);
    }
         
 })

 router.get('/subcategory/:subcategory',async (req,res)=>
 {
    try
    {
        var sub_category = req.params.subcategory;
        let respondList = new Array();
        for(let i = 0; i < emoji_data.length; i++) 
        {  
            let item = emoji_data[i];
            if(item[i].category===sub_category.toLowerCase())
            {
                respondList.push(item) 
            }     
        }
        res.status(200).json(respondList);    
    }
    catch(err){
        res.status(500).json(err);
    }
         
 })

module.exports = router;