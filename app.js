var express = require('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var cookieParser = require ('cookie-parser');
var jwt = require ('jsonwebtoken');
var claveprivada = "quiero accesar"

let books = [];

app.use(bodyParser.json())
app.use(cookieParser())

//ejercicio 5
app.post('/auth/signin', function(req, res) {
  if(!(req.body.usuario && req.body.contraseña)) {
    res.status(400).send('deberás ingresar usuario y contraseña')
  }
  //esto para saber si el usuario  existe en la base de datos 
  //y debe estar dentro de la función post
  jwt.sign({user:req.body.usuario, theme: 'wite' }, claveprivada, function(err, token) {
    if(err)   {
      res.send(500).end();
    } else {
      res.status(200).send({token: token})
    }
  });
});



app.use(function (req, res, next) {
jwt.verify(req.headers.authorization, claveprivada, function(err, decodificado) {
  if(err) {
    res.status(500).end('aqui')
  } else {
    console.log(decodificado)
    // checar ese usuario en la base datos a ver si existe
    next ()
  }
});
})

app.get('/gatito', function (req,res) {
  res.send('si hay un gatito');
  })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});