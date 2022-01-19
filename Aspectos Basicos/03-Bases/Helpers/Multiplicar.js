const fs = require('fs');

const crearArchivoMultiplicacion = async (base = 5, lista = false) =>{

    try {
        let salida = '';

        for (let i = 1; i<=10; i++){
        salida += `${base} X ${i} = ${base*i}\n`;
        }

        if (lista){
            console.log(`Tabla del: `, base)
            console.log(salida);
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