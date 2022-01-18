const fs = require('fs');

const crearArchivoMultiplicacion = async (base = 5) =>{

    try {

        console.log(`Tabla del: `, base)

        let salida = '';
        for (let i = 1; i<=10; i++){
        salida += `${base} X ${i} = ${base*i}\n`;
        }
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return (`Tabla del ${base} ha sido creada`)
        
    } catch (err) {
        throw err
    }

}



module.exports = {
    crearArchivoMultiplicacion
}