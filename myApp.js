let express = require('express');
let app = express();

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
    res.json({ message: "Hello json"})
})






























 module.exports = app;
