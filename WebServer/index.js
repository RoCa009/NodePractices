const express = require('express');
const app = express();
const Port = 8080;

//Servir contenido estatico
app.use(express.static('Public'));


app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/Public/generic.html');
});
app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/Public/elements.html');
});

app.get('*', (req, res) => res.sendFile(__dirname + '/Public/hola-mundo/404.html'));

app.listen(Port);