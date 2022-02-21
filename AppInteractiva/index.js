const inquirer = require('inquirer');
const { guardarDB, leerDB } = require('./Helpers/GuardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar } = require('./Helpers/inquirer');
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

            case '3': //Tareas completadas
                tareas.listarTareasPendientesCompletadas();
            break;

            case '4':// Tareas pendientes
                tareas.listarTareasPendientesCompletadas(false);
            
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                const ok = await confirmar('Seguro?');
                if(ok){
                    tareas.borrarTarea[id];
                }
        }

        guardarDB(tareas.listadoArr);

        await pausa ();
    } while (opt !== '0');
    
}

main();