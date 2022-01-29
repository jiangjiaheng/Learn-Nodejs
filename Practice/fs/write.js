const fs = require('fs')
const { resolve } = require('path')

const path = 'test.txt'
const content = '\nwrite content append at end of txt'

// Promise
// const readAfterwrite = (path, content) => {
//     let result = new Promise((resolve, reject) => {
//         fs.appendFile(path, content, err => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             resolve('write success')
//         })
//     })
//     return result
// }

// readAfterwrite(path, content).then((res) => {
//     console.log(res)
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             resolve(`read content:\n${data}`)
//         })
//     })
// }).then(console.log).catch(console.error)

// async
const writePromise = (path, content) => {
    let result = new Promise((resolve, reject) => {
        fs.appendFile(path, content, err => {
            if (err) {
                reject(err)
                return
            }
            resolve('write success')
        })
    })
    return result
}

const readPromise = (path) => {
    let result = new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(`read content:\n${data}`)
        })
    })
    return result
}

const asyncReadAfterWrite = async function (path, content) {
    try {
        let writeRes = await writePromise(path, content)
        let readRes = await readPromise(path)
        console.log(writeRes)
        console.log(readRes)

    } catch (error) {
        console.error(error)
    }
}

asyncReadAfterWrite(path, content)