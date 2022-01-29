const fs = require('fs')

const path = 'test.txt'

fs.open(path, 'r', (err, fd) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(fd)
})