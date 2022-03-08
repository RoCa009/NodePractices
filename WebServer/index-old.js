const http = require('http');
const Port = 8080
http.createServer((request, response)=>{
    
    response.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    response.writeHead(200,{'Content-Type':'application/csv'});

    response.write('id, nombre\n');
    response.write('1, Rodrigo\n');
    response.write('2, Alberto\n');
    response.write('3, Marcelo\n');

    response.end();
})
.listen(Port);

console.log('Escuchando el puerto', Port)
