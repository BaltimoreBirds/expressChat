var express = require('express');

var app = express();

//defines endpoint at root route
app.get('/', function(request, response){
	response.sendFile(__dirname + "/index.html");
});

app.listen(8080);