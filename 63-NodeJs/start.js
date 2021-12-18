// console.log("Hello World");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');  
    // For serving html and css write text/html instead of text/plain
    res.end('Hello Waseem Shahzad Welcome to first server');
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})


// REPL (Read Evaluate Print Loop) 
// It is used in terminal when we write node then REPL starts first of all it Reads the code then evaluate it then print it then again start for writing
// .exit is for exit

// Press TAB 2 times in REPL then it prints all modules
// Modules built in function constants