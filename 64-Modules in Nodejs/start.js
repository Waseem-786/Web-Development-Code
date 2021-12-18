const fs = require("fs");

console.log("Content of file is : ");
let text = fs.readFileSync("file.txt","utf-8");
console.log(text);

text = text.replace("name","Name");
console.log("Creating a new file......");
fs.writeFileSync("Write.txt",text);

console.log(fs.readFileSync("Write.txt","utf-8"));