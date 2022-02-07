const inquirer = require('inquirer');
const { guardarDB, leerDB } = require('./Helpers/GuardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./Helpers/inquirer');
const Tareas = require('./Models/Tareas');
require('colors');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){//Cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu();
        
        switch(opt){
            case '1':
                const  desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto();
            break;
        }

        guardarDB(tareas.listadoArr);

        await pausa ();
    } while (opt !== '0');
    
}

main();