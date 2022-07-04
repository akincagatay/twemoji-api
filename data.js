var fs=require('fs');
let rawdata = fs.readFileSync('data.json');
let emoji_data = JSON.parse(rawdata);


export default emoji_data;