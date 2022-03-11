const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [

            {
                value: 1,
                name: `${'1.'.green} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial de busqueda`
            },
            {
                value: 3,
                name: `${'3.'.green} Salir`
            }
            
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    
    console.log('==================================='.green);
    console.log('====== Seleccione una opcion ======'.trap.america);
    console.log('===================================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion
}

const pausa = async() => {

    const question = [
        {
            type: 'Input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]

    console.log('\n')
    await inquirer.prompt(question)
}

const leerInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message: '???',
            message,
            validate(value){
               if(value.length === 0){
                  return 'Por favor ingrese un valor';
               }

             return true;
          }
      }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc; 
}

const listadoTareasBorrar =async(tareas=[]) => {
    const choices = tareas.map((tarea, i)=>{
        const idx = `${i + 1}.`.green;
        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (mensaje) => {
    const pregunta = [
        {
            type: 'confirm',
            name: 'OK',
            mensaje 
        }
    ]
    const {ok} = await inquirer.prompt(pregunta);
    return ok
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}