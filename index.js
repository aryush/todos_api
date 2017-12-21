const express = require('express'),
    app = express(),
    port = process.env.PORT || 3030,
    bodyParser = require('body-parser')

const path = require('path')
const todoRoutes = require('./routes/todos')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/views')))

app.get('/', function(req, res) {
  res.sendFile("index.html")
  // res.send("Hello from the ROOT ROUTE");
})

app.use('/api/todos', todoRoutes)

app.listen(port, function() {
  console.log("First Server Started")
})                    //start the server
