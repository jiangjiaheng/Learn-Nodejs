const http = require('http')
// const { hostname } = require('os')

const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {
    // get request from local axios
    let data = ''
    req.on('data', chunk => {
        data += chunk
    })
    req.on('end', () => {
        if (data) {
            console.log(JSON.parse(data))
        }
    })
    // return res content
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world\n')
})

server.listen(port, () => {
    console.log(`server is running at http://${hostname}:${port}`)
})