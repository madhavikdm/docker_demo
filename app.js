 const express = require('express')
const app = express()
const port = 3000
const HOST = '0.0.0.0'


app.get('/', (req, res) => {
    res.send('Hello service from github actions')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
