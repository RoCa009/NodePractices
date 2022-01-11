const fs = require('fs');

const crearArchivoMultiplicacion = (base = 5) =>{

    console.log(`Tabla del: `, base)

    let salida = '';
    for (let i = 1; i<=10; i++){
    salida += `${base} X ${1} = ${base*1}\n`;
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`Tabla del ${base} ha sido creada`)

}

module.exports = {
    crearArchivoMultiplicacion
}