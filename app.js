var express = require('express');
var app = express();
var path = require ('path')


// respond with "hello world" when a GET request is made to the homepage
app.get('/hellow', function (req, res) {
  res.send('Hello World!');
});

// respond with "bye bye" when a GET request is made to the homepage
app.get('/bye', function (req, res) {
    res.send('bye bye');
  });


//app.use(express.static('assets'))
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



