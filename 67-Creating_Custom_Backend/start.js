const http = require('http');
const fs = require('fs');
const port = '80';
const local_host = '127.0.0.1';
const Home_file_content = fs.readFileSync('67-Creating_Custom_Backend/home.html');
const About_file_content = fs.readFileSync('67-Creating_Custom_Backend/about.html');
const Contact_file_content = fs.readFileSync('67-Creating_Custom_Backend/contact_us.html');
const Services_file_content = fs.readFileSync('67-Creating_Custom_Backend/services.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    
    console.log(req.url);
    // print complete url 
    // "/" prints for first page
    url = req.url;

    // its means 1st page has "/" this url so 1st page open is home page
    if(url == '/')
    {
        res.end(Home_file_content);
    }
    // If we click on services then href is open which is match with this /Services so service page opens
    else if(url == '/Services'){
        res.end(Services_file_content);
    }
    else if(url == '/About'){
        res.end(About_file_content);
    }
    else if(url == '/Contact-us'){
        res.end(Contact_file_content);
    }
    else{
        res.statuscode = 404;
        res.end('<h1>404 Error Found</h1>');
    }
})
server.listen(80,'127.0.0.1',()=>{
    console.log(`Server listen on port 80 http://${local_host}:${port}`);
})