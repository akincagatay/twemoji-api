const router = require("express").Router();
var fs=require('fs');
let rawdata = fs.readFileSync('emoji_data.json');
let emoji_data = JSON.parse(rawdata);

router.get("/",function(req, res){
    res.send(emoji_data);
 });

 // Get likely
 router.get('/:name',(req,res)=>
 {
    var name = req.params.name;
    let respondList = new Array();
    for(let i = 0; i < emoji_data.length; i++) 
    {  
        let item = emoji_data[i];
        console.log(item)
        if(item.name.includes(name.toLowerCase()))
        {
            respondList.push(item) 
        }     
    }
	res.status(200).json(respondList);         
 })

 router.get('/:category',(req,res)=>
 {
    var category = req.params.category;
    let respondList = new Array();
    for(let i = 0; i < emoji_data.length; i++) 
    {  
        let item = emoji_data[i];
        console.log(item)
        if(item.category.includes(category.toLowerCase()))
        {
            respondList.push(item) 
        }     
    }
	res.status(200).json(respondList);         
 })

module.exports = router;