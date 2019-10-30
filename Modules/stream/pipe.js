const fs = require('fs');

const rs = fs.createReadStream('./assets/sample.txt');
const ws = fs.createWriteStream('./assets/copied.txt');

rs.pipe(ws);