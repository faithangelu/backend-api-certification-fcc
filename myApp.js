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

app.use('/public', express.static(__dirname+"/public"));































 module.exports = app;
