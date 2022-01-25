const brant = {
    name: 'brant',
    age: 28,
    sex: 'male',
    hello() {
        console.log(`hello, my name is ${this.name}`)
    }
}

const hello = () => {
    console.log('hello world')
}

let varName = 'varName'

// * as all
export { brant as person, hello }
export { varName }
export { default as number, bar } from './myModule.js'

// export default 24
export { foo as default } from './myModule.js'