const http = require('http'); // Http module -> running up websites!!!

const server = http.createServer((req, res)=>{ // Request and response
    if(req.url === '/'){
        res.end('Welcome to our website!')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Ooops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>        
        `)
})

server.listen(5000)