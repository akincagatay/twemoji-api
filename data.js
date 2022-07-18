var fs=require('fs');
let rawdata = fs.readFileSync('emoji_data.json');
export const emoji_data = JSON.parse(rawdata);