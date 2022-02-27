require('dotenv').config()

const {leerInput, inquirerMenu, pausa} = require('./Helpers/inquirer');
const Busquedas = require('./Models/Busquedas');

const main = async() => {

    const busquedas = new Busquedas();
    let opt;

    do{
        opt = await inquirerMenu();

        switch(opt){
            case 1:
                //Mensaje
                const terminoBusqueda = await leerInput('Ciudad: ');
                //Buscar match :>
                const lugares = await busquedas.ciudad(terminoBusqueda);
                console.log(lugares)
                

                //Select del lugar

                //Datos del clima

                //Resultados

                console.log('\nInfo del lugar:\n'.green);
                console.log('Ciudad:', );
                console.log('Latitud:', );
                console.log('Longitud', );
                console.log('Temperatura:', );
                console.log('Temperatura min: ',);
                console.log('Temperatura max: ',);

            break;    
        }

        //console.log({opt})

        if(opt !==3) await pausa();
    }while(opt !== 3)
    

}

main();