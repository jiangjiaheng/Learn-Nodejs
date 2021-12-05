const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.end('hello')
})

const server = app.listen(3000, () => {
    console.log('success')
})

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('end')
    })
})

process.kill(process.pid, 'SIGTERM')
