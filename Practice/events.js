const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

// eventEmitter.on('start', ([start, end]) => {
//     console.log(`from ${start} to ${end}`)
// })

const startFun = () => {
    let res = new Promise((resolve) => {
        eventEmitter.on('start', ([start, end]) => {
            resolve([start, end])
        })
    })
    return res
}

// startFun().then(([start, end]) => {
//     console.log(`res: from ${start} to ${end}`)
// })

const getRes = async () => {
    let [start, end] = await startFun()
    console.log(`res2: from ${start} to ${end}`)
}

getRes()

eventEmitter.emit('start', [1, 100])