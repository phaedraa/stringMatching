var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(app.get('port') || 3000, function() {
  console.log('Matchability app listening on port ' + app.get('port'));
});
