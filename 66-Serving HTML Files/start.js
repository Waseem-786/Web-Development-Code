const http = require('http');
const fs = require('fs');
let read_file = fs.readFileSync('start.html');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(read_file);
})
// port , url/local_host , call back
server.listen(80,'127.0.0.1',()=>{
    console.log('Listening on port 80');
})
// if we write port == 80
// then there is no need of writing explicitly port name in google 
// only write local host 127.0.0.1
// otherwise 127.0.0.1:port