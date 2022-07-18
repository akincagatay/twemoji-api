var fs=require('fs');
let rawdata = fs.readFileSync('emoji_data.json');
const emoji_data = JSON.parse(rawdata);

module.exports = emoji_data;
