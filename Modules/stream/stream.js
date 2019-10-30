const fs = require('fs');

// stream.Writable
const ws1 = fs.createWriteStream('./assets/sample.txt', 'utf-8');
ws1.write('1使用Stream写入文本数据...\n');
ws1.write('end');
ws1.end();

const ws2 = fs.createWriteStream('./assets/copied.txt');
ws2.write(new Buffer('2使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('end', 'utf-8'));
ws2.end();

// stream.Readable
const rs = fs.createReadStream('./assets/sample.txt', 'utf-8');

rs.on('data', chunk => {
    console.log(`data = ${chunk}`);
});

rs.on('end', () => {
    console.log('end');
});

rs.on('error', err => {
    console.log(`error = ${err}`);
});