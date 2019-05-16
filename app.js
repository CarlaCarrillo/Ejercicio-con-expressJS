var express = require('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var cookieParser = require ('cookie-parser');

let books = [];



//ejercicio 4

app.use(bodyParser.json())
app.use(cookieParser())

app.get("/books", (req, res) => {
  res.status(200).send({data: books});
  console.log(req.cookies)
});

app.post('/books',function (req, res) {
 console.log(req.body)
 console.log(req.cookies)
 
  if (req.body.nombrebook && req.body.autorbook) {
    books.push(req.body);
    res.status(201).send("sí quedó");
  }else {
    res.status(400).send({error:"necesitar agregar el nombre y el autor del libro"})
  }
  })





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



