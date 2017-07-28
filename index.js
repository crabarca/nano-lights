var express = require('express')
var app = express()
 

app.get('/notes', function(req, res) {
  res.json({notes: "This is your notebook. Edit this to start saving your notes!"})
})
app.get('/', function(req, res){
  res.json({hello: "hello"})
})
 
app.listen(3000)