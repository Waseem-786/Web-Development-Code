const http = require('http');
const hostname = '127.0.0.1';
const port = 80;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');  
    // For serving html and css write text/html instead of text/plain
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Grid</title>
        <style>
            .container {
                display: grid;
                /* grid-template-rows: 90px 400px 500px 500px 500px 650px 550px; */
                grid-template-areas:
                        'navbar navbar navbar'
                        'first first first'
                        'car bike bicycle'
                        'clients clients contact';
                grid-gap: 1rem;
            }
    
            
            #navbar #unordered {
                display: flex;
                justify-content: center;
            }
            #clients{
                grid-area: clients;
            }
            #clients img{
                width: 200px;
                height: 200px;
            }
            #contact{
                grid-area: contact;
            }
            #first{
                grid-area: first;
            }
            #car{
                grid-area: car;
            }
            #car img{
                width: 200px;
            }
            #bike{
                grid-area: bike;
            }
            #bike img{
                width: 200px;
            }
            #Bicycle{
                grid-area: bicycle;
            }
            #Bicycle img{
                width: 200px;
            }
             #navbar {
                grid-area: navbar;
                background-color: black;
            }
            #navbar #unordered #travel_list{
                color: yellow;
                font-weight: bold;
                list-style: none;
                margin: 2px 10px;
            }
            #navbar #unordered .list {
                list-style: none;
                margin: 2px 10px;
            }
            
            #navbar #unordered .list a{
                color: white;
                text-decoration: none;
            }
           
            .box {
                background-color: tomato;
                border: 5px solid royalblue;
            } 
            @media only screen and (min-width:300px) and (max-width: 700px) {
                .container {
                grid-template-areas:
                        'navbar'
                        'first'
                        'car'
                        'bike'
                        'bicycle'
                        'clients'
                        'contact';
            }
            }
        </style>
    </head>
    
    <body>
        <div class="container">
    
            <nav id="navbar" class="box">
                <ul id="unordered">
                    <li id="travel_list">#Travel</li>
                    <!-- <img src="/Pictures/Logo.jpeg" alt="Loading Logo"> -->
                    <li class="list"><a href="#first">Home</a></li>
                    <li class="list"><a href="#car">Car Services</a></li>
                    <li class="list"><a href="#bike">Bike Services</a></li>
                    <li class="list"><a href="#Bicycle">Bicycle Services</a></li>
                    <li class="list"><a href="#clients">Our Clients</a></li>
                    <li class="list"><a href="#contact">Contact us</a></li>
                </ul>
            </nav>
            <section id="first" class="box">
                <h1>Welcome to our website</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque fugiat provident aliquid quidem
                    alias praesentium atque eum ipsum numquam consequatur dignissimos aspernatur, velit</p>
            </section>
    
            <section id="car" class="box">
                <div>
                    <p id="car_heading">Car Services</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga aspernatur nemo repellat
                        voluptatibus laboriosam culpa nihil, aliquid magni recusandae alias iste placeat nobis excepturi!
                        Ipsa quae culpa autem similique placeat. Exercitationem, optio error ab ex omnis quaerat. Dicta
                        perspiciatis illo itaque omnis ad necessitatibus quasi saepe quibusdam modi cupiditate!</p>
                </div>
                <img src="/Pictures/Car.webp" alt="Loading">
            </section>
    
            <section id="bike" class="box">
                <div>
                    <p id="bike_heading">Bike Services</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga aspernatur nemo repellat
                        voluptatibus laboriosam culpa nihil, aliquid magni recusandae alias iste placeat nobis excepturi!
                        Ipsa quae culpa autem similique placeat. Exercitationem, optio error ab ex omnis quaerat. Dicta
                        perspiciatis illo itaque omnis ad necessitatibus quasi saepe quibusdam modi cupiditate!</p>
                </div>
                <img src="/Pictures/Bike.webp" alt="Loading">
            </section>
    
            <section id="Bicycle" class="box">
                <div>
                    <p id="Bicycle_heading">Bicycle Services</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga aspernatur nemo repellat
                        voluptatibus laboriosam culpa nihil, aliquid magni recusandae alias iste placeat nobis excepturi!
                        Ipsa quae culpa autem similique placeat. Exercitationem, optio error ab ex omnis quaerat. Dicta
                        perspiciatis illo itaque omnis ad necessitatibus quasi saepe quibusdam modi cupiditate!</p>
                </div>
                <img src="/Pictures/Bicycle.webp" alt="Loading">
            </section>
    
            <section id="clients" class="box">
                <p>Our Clients</p>
                <div>
                    <img src="/Pictures/playstore.png" alt="Loading">
                    <img src="/Pictures/whatsapp.webp" alt="Loading">
                    <img src="/Pictures/android.png" alt="Loading">
                </div>
            </section>
    
            <section id="contact" class="box">
                <p>Contact us</p>
                <div>
                    <label for="Name">Name:</label>
                    <input type="text" id="Name">
                    <label for="Email">Email:</label>
                    <input type="email" name="email" id="Email">
                    <label for="Number">Phone Number:</label>
                    <input type="text" id="number">
                </div>
            </section>
        </div>
    </body>
    
    </html>`);
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})
