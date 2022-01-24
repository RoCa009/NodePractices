require('colors');
const { mostrarMenu, pausa } = require('./Helpers/mensajes');
console.clear();

const main = async() => {
    let opt = '';

    do {
        opt = await mostrarMenu();
        console.log({opt});
        await pausa();
    } while (opt !== '0');
    
}

main();