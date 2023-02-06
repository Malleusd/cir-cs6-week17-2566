const http = require('http')

//1.Create a server object
 http.createServer((rep,res) => {
    //1.1 Get:http://localhost:5000
    if (rep.url === '/'){ {
       res.writeHead(200,{ 'content-Type': 'text/html' })
       res.write('welcome to home page')
      return res.end()
    }
    else if (req.url == '/about') {
        //Get:http://localhost:5000
        res.writeHead(200,{ 'content-Type': 'text/html' })
        res.write('welcome to About page')
        return res.end()
    }
    else if (req.url == '/admin') {
        //Get:http://localhost:5000
        res.writeHead(200,{ 'content-Type': 'text/html' })
        res.write('welcome to Admin page')
        return res.end()
    }
    else {
        //Get:http://localhost:5000
        res.writeHead(404, { 'content-Type': 'text/html' })
        res.write('NOT FOND 404')
       return res.end()
    }
  }).listen(5000),

//2.Run server
