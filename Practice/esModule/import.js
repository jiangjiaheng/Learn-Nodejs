all.person.name = 'test'
all.person.hello()
all.hello()
console.log(all.varName)

// from myModule
console.log(`from myModule: ${all.bar()}, ${myFoo()}, ${all.number}`)

//import()
if (true) {
    import('./imFun.js').then(({ a, b }) => {
        console.log(`from imFun: ${a},${b}`)
    })
}

import * as all from './export.js'
import myFoo from './export.js'
import './load.js'