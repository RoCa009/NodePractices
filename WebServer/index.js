const express = require('express');
const hbs = require('hbs');

const app = express();
const Port = 8080;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/Partials', function(){})

//Servir contenido estatico
app.use(express.static('Public'));


app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Rodrigo Caballero',
        titulo: 'Curso Node'
    });
});
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/Public/elements.html');
});

app.get('*', (req, res) => res.sendFile(__dirname + '/Public/hola-mundo/404.html'));

app.listen(Port);