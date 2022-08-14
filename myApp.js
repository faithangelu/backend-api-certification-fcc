let express = require('express');
let app = express();
let process = require('dotenv').config()

// Meet the Node Console 
// console.log("Hello World")

// Start a working Express Server
// app.get("/", (req,res) => { 
//    res.send("Hello Express");
// })

// Serve an HTML File
app.get("/", (req, res) => {    
    res.sendFile(__dirname + "/views/index.html");    
})

// Serve Static Asstes
app.use('/public', express.static(__dirname+"/public"));

// Serve JSON on a Specific Route
app.get('/json', (req,res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") res.send({ message: "HELLO JSON"})
    else res.send({message: "Hello json"})
})






























 module.exports = app;
