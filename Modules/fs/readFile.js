const fs = require('fs');

// asynchronous read file

fs.readFile('./assets/readFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`async read file : ${data}`);
    }
})

fs.readFile('./assets/smile.jpg', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(`pic length is ${data.length}`);
    }
});

fs.stat('./assets/readFile.txt', (err, stat) => {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

// synchronization read file

let data = fs.readFileSync('./assets/readFile.txt', 'utf-8');
console.log(`sync read file : ${data}`);

let statData = fs.statSync('./assets/readFile.txt');
console.log(`sync read fileStat object : ${statData}`);