const path = require('path')

const test = 'test.txt'

console.log(path.dirname(test))
console.log(path.basename(test))
console.log(path.extname(test))
console.log(path.basename(test, path.extname(test)))
console.log(path.resolve(test))