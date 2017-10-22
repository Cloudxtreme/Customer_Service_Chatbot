var express = require('express');
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
  host: "enhanced-cs.c6i7wvyicmua.us-east-2.rds.amazonaws.com",
  user: "cs_admin",
  password: "1234Qwer??"
  });
  
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


app.set('port', (process.env.PORT || 5000));

app.use("/", express.static(__dirname));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/chat.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});