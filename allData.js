const router = require("express").Router();
import  {emoji_data} from require("./data")

router.get("/",function(req, res){
    res.send(emoji_data);
 });

 // Get likely
 router.get('/:name',(req,res)=>
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

module.exports = router;