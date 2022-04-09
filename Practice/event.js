const EventEmitter = require('events')
const door = new EventEmitter()

door.on('open', () => {
    console.log('open door')
})

door.on('open', () => {
    console.log('open door')
})

console.log(door.listeners('open'))

console.log(door.listenerCount('open'))

door.removeAllListeners('open')
door.emit('open')