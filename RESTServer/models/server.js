//Hacemos uso de express
const express = require('express');

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
        //Directorio public
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.get('/salute', (req, res)=>res.send('Hello there!')); //Endpoint llamado salute
    }

    listen(){
        //Proceso en el cual hacemos uso del PORT
        this.app.listen(this.port, () =>{console.log('corriendo en puerto: ', this.port)});
    }
}

//Exportamos la clase
module.exports = Server