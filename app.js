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


//ejercicio 2
app.get('/p1', function (req,res) {
  res.send("estas en p1")
});

app.post('/p2', function (req,res) {
  res.send("Sorry, we cannot find that!")
});

app.path('/p3', (req,res)  {
  res.status(p3).sendFile('/assets/puppy-1.png')
});


//app.use(express.static('assets')) y se abre en navegador con http://localhost:3000/assets/nombre de imagen.jpeg
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



