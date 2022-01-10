const fs = require('fs');


const base = 7;

let salida = '';

for (let i = 1; i<=10; i++){
    salida += `${base} X ${1} = ${base*1}\n`;
}

fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) throw err;

    console.log(`Tabla del ${base} ha sido creada`)
})

console.log(salida);