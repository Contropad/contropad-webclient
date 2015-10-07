var express = require('express');
var app     = express();
var path    = require('path');

app.use('/assets', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

var server = app.listen(3000);
