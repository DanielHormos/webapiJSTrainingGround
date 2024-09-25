const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>Hello fellow developer!</h1>')
})

const hostname = 'localhost'
const port = 3000

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})