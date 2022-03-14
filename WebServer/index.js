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
    res.render('elements', {
        nombre: 'Rodrigo Caballero',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Rodrigo Caballero',
        titulo: 'Curso Node'
    });
});


//app.get('*', (req, res) => res.sendFile(__dirname + '/Public/OldPublic/404.html'));

app.listen(Port);