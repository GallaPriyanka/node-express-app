const express = require('express')
const app = express()
const path = require('path')

const hostname = '0.0.0.0'   // allows remote computers to access
const port = 3002

app.use(express.static(path.join(__dirname, './styles')));

app.get('/', function (req, res) {
  console.log('Get request for /')
  // 
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/hello', (req, res) => {
  console.log('Get request for /hello')
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  console.log('Get request for /big')
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  console.log('Get request for /greeting/:id')
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  console.log('Get request for /yo/:buddy')
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})

// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

