const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('NUEVA PETICION');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal');
            res.end();
            break;
        
        default:
            res.write('error 404: no se lo que quieres');
            res.end()
    }

   /*  res.writeHead(201,{'Content-Type': 'text/plain' });
    res.write('ya se usar http de nodejs ');

    //cierre de la peticion
    res.end() */
}

console.log("http://localhost:3000");









