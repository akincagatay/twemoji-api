const router = require("express").Router();
const emoji_data= require("./data");

router.get('/name/:name',async(req,res)=>
{
    try
    {
        var name = req.params.name;
        let respondList = new Array();
        for(let i = 0; i < emoji_data.length; i++)
        { 
            let item = emoji_data[i];
            
            if(item.name === name.toLowerCase())
            {
                respondList.push(item.hex);  
            }
        }     
        res.status(200).json(respondList);   
    }
    catch(err){
        res.status(500).json(err);
    } 
})

// Get All Data with Similar Name
router.get('/similarname/:similarname',(req,res)=>
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
               respondList.push(item.hex); 
           }     
       }
       res.status(200).json(respondList);   
   }
   catch(err){
       res.status(500).json(err);
   }         
})


router.get('/category/:category',async(req,res)=>
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
                respondList.push(item.hex);  
            }
        }     
        res.status(200).json(respondList);   
    }
    catch(err){
        res.status(500).json(err);
    }  
})

router.get('/subcategory/:subcategory',async(req,res)=>
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
                respondList.push(item.hex);  
            }
        }     
        res.status(200).json(respondList);   
    }
    catch(err){
        res.status(500).json(err);
    }  
})

module.exports = router;