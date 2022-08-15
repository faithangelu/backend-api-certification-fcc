let express = require('express');
let bodyParser = require('body-parser')
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

// app.get('/now', (req, res, next) => {
//     req.time =  new Date().toString();
//     next();
//   }, (req, res) => {    
//     res.json({ time: req.time})
//     console.log(req.time)
//   })
  


// app.post('/:word/:echo', (req, res) => {
//     let {param1, param2} = req.params;
//     res.json(req.params)
//    console.log(req.params)
//   }).get('/:word/:echo', (req, res) => {    
//     var word   = req.params.word; 
  
//     // var echo  = req.params.echo; 
//     res.json({ echo: word })
//     console.log(req.params.word);
//   })
  
// app.route('/name?first=firstname&last=lastname', (req, res) => {    
    
app.use(bodyParser.urlencoded({extended: false}))
app.post('/name',  (req, res) => {
        
    var name = req.body.first + " " + req.body.last
    res.json({ name : name })
})


app.listen(3000, function() {
    console.log("Serving 3000")
})

























 module.exports = app;
