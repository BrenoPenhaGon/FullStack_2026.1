require("colors")
var http = require("http")
var express = require("express")
var bodyParser = require("body-parser")

var app = express()

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())


var server = http.createServer(app)
server.listen(80)

console.log("Servidor rodando ...". rainbow)

app.get("/", function(req, res){
    res.redirect("index.html")
})

app.get("/inicio", function(req, res){
    var text = req.query.text;
    var number = req.query.number;
    var color = req.query.color;

    console.log(text, number, color)
    console.log("Requisição feita por GET")
})

app.post("/inicio", function(req, res){
    var text = req.body.text;
    var number = req.body.number;
    var color = req.body.color;

    console.log(text, number, color)
    console.log("Requisição feita por POST")
})