let express = require('express');
let app = express();

// Meet the Node Console 
// console.log("Hello World")

// Start a working Express Server
// app.get("/", (req,res) => { 
//    res.send("Hello Express");
// })

// Serve an HTML File
app.get("/views/index.html", (req, res) => {
    let absolutePath = __dirname + relativepath/File.ext
    res.sendFile(absolutePath);
})

































 module.exports = app;
