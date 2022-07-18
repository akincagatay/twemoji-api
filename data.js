var fs=require('fs');
let rawdata = fs.readFileSync('emoji_data.json');
const emoji_data = JSON.parse(rawdata);

export default emoji_data;