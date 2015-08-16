var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile('index.html');
});

// Start server on specified port.
http.listen(port, function() {
    console.log('Server running on port ' + port);
});