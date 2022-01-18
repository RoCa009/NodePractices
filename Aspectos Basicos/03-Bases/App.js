
const { crearArchivoMultiplicacion } = require ('./Helpers/Multiplicar');
const arg = require('yargs').argv;

console.log(base)

//const base = 1;

crearArchivoMultiplicacion(base)
    .then (nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch (err => console.log(err))