const  argv  = require('./Yargs/yargs');
const { crearArchivoMultiplicacion } = require ('./Helpers/Multiplicar');
require('colors');


console.clear();    

crearArchivoMultiplicacion(argv.b, argv.l)
    .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'con exito'))
    .catch (err => console.log(err))