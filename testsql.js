var mysql = require('mysql');

var con = mysql.createConnection({
   host: "enhanced-cs.c6i7wvyicmua.us-east-2.rds.amazonaws.com",
   user: "cs_admin",
   password: "1234Qwer??"
 });
 
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 });