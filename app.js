 const express = require('express')
const app = express()
const port = 3000
const HOST = '0.0.0.0'


app.get('/', (req, res) => {
    res.send('Hello world-----updating service from jenkins at 6th july at afternoon')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
