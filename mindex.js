/* 
const http = require("http");

import fs from 'fs'



const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end("<h1>About Page</h1>")
    } 
    else if (req.url === '/') {
        fs.readFile('./index.html', () => {
            console.log("File Read");
        })

        res.end(home)
    }
    else if( req.url === '/contact') {
        res.end("<h1>Contact Page</h1>")
    }

    else {
        res.end("<h1>Page not found</h1>")
    }
});



server.listen(4000, () => {
    console.log("Server is running");
}) */





/* const name = 'Chandrashekhar J.';

module.exports = name; */

/* const http = require("http");

const PORT = 2000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    res.end('SAn bulzavo')
});

server.listen(PORT, hostname, () => {
    console.log(`the server is running on http://${hostname}:${PORT}`);
}) */