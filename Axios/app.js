const axios = require('axios')

axios.post('http://127.0.0.1:4000', {
    test: 'it comes from axios request'
}).then(res => {
    console.log(`status code: ${res.status}`)
    console.log(res.statusText)
}).catch(error => {
    console.error(error)
})