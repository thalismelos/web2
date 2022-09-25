var express = require('express');
var load = require("express-load")
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

//codigo acrescentado
app.listen(3001, function (){
  console.log("servidor rodando")
});