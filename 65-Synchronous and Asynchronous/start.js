// Synchronous and Blocking
// line by line execution
// const fs = require("fs");
// let text = fs.readFilesync("file.txt","utf-8");
// Blocking code if error appears

// Asynchronous and non-blocking
// line by line execution not guaranteed
// callbacks will fire
const fs = require("fs");
let text = fs.readFile("file.txt","utf-8",(error,data)=>{
    console.log(error,data);
    // It does not block code so it is non-blocking if we give file name wrong or some other error
    //third a argument is call back it is execute when compiler done its work and executed at end
});
console.log("This is a message");