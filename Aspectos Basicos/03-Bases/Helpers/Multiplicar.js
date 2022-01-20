const fs = require('fs');
const colors = require('colors');
const crearArchivoMultiplicacion = async (base = 5, lista = false, hasta = 10) =>{

    try {
        let salida, consola = '';

        for (let i = 1; i<=hasta; i++){
        salida += `${base} X ${i} = ${base*i}\n`;
        consola += `${base} ${'X'.green} ${i} ${'='.red} ${base*i}\n`;
        }

        if (lista){
            console.log(`Tabla del: `, colors.blue(base))
            console.log(consola);
        }
    
        
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return (`Tabla del ${base} ha sido creada`)
        
    } catch (err) {
        throw err
    }

}



module.exports = {
    crearArchivoMultiplicacion
}