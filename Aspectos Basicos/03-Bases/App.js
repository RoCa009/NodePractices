const { boolean } = require('yargs');
const { crearArchivoMultiplicacion } = require ('./Helpers/Multiplicar');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l',{
        alias: 'lista',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check( (argv, options) => {
        if( isNaN(argv.b, argv.l) ){
            throw 'La base debe de ser un numero solamente'
        }
        return true;
    })
    .argv;

console.clear();    

console.log(argv)    

crearArchivoMultiplicacion(argv.b)
    .then (nombreArchivo => console.log(nombreArchivo, 'con exito'))
    .catch (err => console.log(err))