const express = require('express')
const app = express()
require('dotenv').config();

const port = process.env.PORT;
const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use('', express.static('public'));
 
// app.get('/',  (req, res) => {
//   res.send('Hello World')
// });

app.get('/hola-mundo',  (req, res) => {
    res.send('Hello World en su ruta')
});

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Daniel De Leon',
    titulo: 'Practica Node Express'
  });
});

app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'Daniel De Leon',
    titulo: 'Practica Node Express'
  });
});

app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Daniel De Leon',
    titulo: 'Practica Node Express'
  });
});

// app.get('/generic',  (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements',  (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });
 
app.get('*',  (req, res) => {
   res.sendFile(__dirname + '/public/404.html')
});
app.listen(port);