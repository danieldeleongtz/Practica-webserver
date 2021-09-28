const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // const persona = {
    //     id: 1,
    //     nombre: 'daniel'
    // }

    //res.write(JSON.stringify(persona));
    res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');