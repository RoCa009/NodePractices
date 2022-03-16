//Se hace uso de dotenv para manejo del puerto
require('dotenv').config();

const Server = require('./models/server');//Se importa la clase Server 

//Se hace una instancia de la clase Server
const server = new Server();

//Lanzar método listen para levantar el server
server.listen();

