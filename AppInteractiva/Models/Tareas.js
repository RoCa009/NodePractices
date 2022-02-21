const Tarea = require("./Tarea");

class Tareas {
    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea(id=''){
        this._listado = {};
        delete this._listado[id];
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        
        console.log();
        this.listadoArr.forEach( (tarea, index) => {

            const idx = `${index + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });         
    }

    listarTareasPendientesCompletadas(completadas = true){
        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea=>{
            
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red

            if(completadas){
                //Mostrar completadas
                if(completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').green} ${desc} :: ${completadoEn}`);
                }
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${(contador + '.').red} ${desc} :: ${estado}`);
                }
            }
            
        });
    }
}

module.exports = Tareas;