//Hacemos uso de express
const express = require('express');
const cors = require('cors');

//Creamos la clase Server
class Server {
    constructor(){
        //Crear la app en express como una propiedad en la clase servidor
        this.app = express();

        //Usar el port de env
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Llamar las rutas de mi app
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Directorio public
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/api/users', require('../routes/user'));
    }

    listen(){
        //Proceso en el cual hacemos uso del PORT
        this.app.listen(this.port, () =>{console.log('corriendo en puerto: ', this.port)});
    }
}

module.exports = Server