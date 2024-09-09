// CS55.13 Week 2 Assignment 3 Node.js + React Basics

const http = require("http");

const fs = require("fs").promises;

const requestListener = function(req, res) {

    console.log(req.url);

    if (req.url === "/"){

        fs.readFile( __dirname + "/page.html" )
            .then(
                contents => {
                    res.setHeader("Content-Type", "text/html; charset=UTF-8");

                    res.writeHead(200);

                    res.end(contents);
                }
            )
    } else {
        fs.readFile( __dirname + "/data.json")
            .then(contents => {
                res.setHeader("Content-Type", "applictaion/json; charset=UTF=8");

                res.writeHead(200);
                res.end(contents);

            });

    
    }
};

//create server instance

const server = http.createServer(requestListener);

const host = "127.0.0.1";   // localhost ip address local computer

const port = "3000";    

// call the listen() method to start listing to http request on port 3000 
server.listen(
    port, 
    host, 
    () => {
        console.log('Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators, in every nation.');
    }
);