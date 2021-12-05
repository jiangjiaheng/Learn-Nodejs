const args = process.argv.forEach((val, index) => {
    console.log(`${index}:${val}`)
})

let val = process.argv.slice(2)

console.log(val[0])