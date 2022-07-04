var fs=require('fs');
let rawdata = fs.readFileSync('data.json');
let emoji_data = JSON.parse(rawdata);


module.exports = emoji_data