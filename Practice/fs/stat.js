const fs = require('fs')

fs.stat('test.txt', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }

    stats.isFile()
    stats.isDirectory()
    stats.isSymbolicLink()
    console.log(stats.size)
})