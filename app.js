const express = require('express')
const app = express()
const port = 7878 
const HOST = '172.31.21.97'


app.get('/ping', (req, res) => {
    console.log('Hello BNT SOFT');
    res.send('Hello BNT SOFT')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
