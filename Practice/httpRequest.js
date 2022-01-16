const https = require('https')

const data = JSON.stringify({
    todo: 'do something'
})
const options = {
    hostname: '127.0.0.1',
    port: 4000,
    method: 'POST',
    Headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    console.log(`status code: ${res.statusCode}`)

    res.on('data', d => {
        console.log(d)
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)

req.end()