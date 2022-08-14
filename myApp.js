let express = require('express');
let app = express();
let dotenv = require('dotenv')

dotenv.config();

// console.log("Hello World")

// app.get("/", (req,res) => { 
//    res.send("Hello Express");
// })

app.get("/", (req, res) => {    
    res.sendFile(__dirname + "/views/index.html");    
})

app.use('/public', express.static(__dirname+"/public"));

// // Serve JSON on a Specific Route
// app.get('/json', (req,res) => {
//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         res.send({ message: "HELLO JSON"})
//         // console.log(process.env.MESSAGE_STYLE)
//     } else {
//         // console.log('Not working')
//         res.send({message: "Hello json"})
//     } 
// })


// app.use((req, res, next) => {
//    console.log(`${req.method} ${req.path} - ${req.ip}`);
//     next()
// })

// app.get('/now', (req, res) => {

// }, (req, res) => {
//     res.send(req.time)
// })

app.get('/now', (req, res, next) => {
    req.time =  new Date().toString();
    next();
  }, (req, res) => {    
    res.json({ time: req.time})
    console.log(req.time)
  })
  

// app.listen(3000, function() {
//     console.log("Serving 3000")
// })


























 module.exports = app;
