const fs = require('fs');
const asyncData = '\nasync write hello nodejs';
const syncData = 'sync write hello nodejs';

// asynchronous write file
fs.appendFile('./assets/writeFile.txt', asyncData, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
})

// synchronization write file
fs.writeFileSync('./assets/writeFile.txt', syncData);