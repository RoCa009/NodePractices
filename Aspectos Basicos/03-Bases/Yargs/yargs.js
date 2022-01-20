const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'lista',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b, argv.l) ){
            throw 'La base debe de ser un numero solamente'
        }
        return true;
    })
    .argv;


    module.exports = argv;