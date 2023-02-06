const http = require('http');

//http://localhost:5000
const server = http.createServer((req,res) => {
    //http header
    // res.setHeader('content-Type','text/plain');
    //res.statusCode = 200;
    res.writeHead({'content-Type': 'text/html'});
    res.write('');   
    return res.end();
})

//http://localhost:5000
server.listen(5000), () => {
    console.log('Server runnig at http://localhost:5000')
}