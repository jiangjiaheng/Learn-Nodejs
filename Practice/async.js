const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => { resolve('do something') }, 3000)
    })
}

const doSomething = async () => {
    // console.log(await doSomethingAsync())
    let res = await doSomethingAsync()
    return res
}

// console.log('before')
// doSomething().then(res => console.log(`res:${res}`))
// console.log('after')

const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(() => { resolve('doSometing') }, 1000)
    })
}

const watchOverSomeoneDoingSometing = async () => {
    const someting = await promiseToDoSomething()
    return someting + ' watchOver'
}

const watchOverSomeoneDoingSometingAgain = async () => {
    const someting = await watchOverSomeoneDoingSometing()
    return someting + ' watchOverAgain'
}

const watchOverSomeoneDoingSometing2 = async (res) => {
    return res + ' watchOver2'
}

const watchOverSomeoneDoingSometingAgain2 = async () => {
    const res = await promiseToDoSomething()
    const res2 = await watchOverSomeoneDoingSometing2(res)
    return res2 + ' watchOverAgain2'
}

watchOverSomeoneDoingSometingAgain().then(res => {
    console.log(res)
})

watchOverSomeoneDoingSometingAgain2().then(res => {
    console.log(res)
})