 const express = require('express')
const app = express()
const port = 3000
const HOST = '0.0.0.0'


app.get('/', (req, res) => {
    res.send('Hello world-----today is 8th july 2022 updating service from jenkins build')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
