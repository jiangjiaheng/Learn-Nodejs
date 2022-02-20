const path = require('path')

console.log(path.basename('test/something'))

console.log(path.dirname('test/something'))

console.log(path.extname('test/something.txt'))

console.log(path.isAbsolute('/test/something.txt'))

console.log(path.parse('/test/something.txt'))

console.log(path.resolve('path.js'))

console.log(path.join('/test/','something.txt'))