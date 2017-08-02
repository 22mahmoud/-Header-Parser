const express = require('express')
const headerParser = require('./controllers/headerParser')


const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + '/public'))

// Template engine
app.set('view engine', 'ejs');

app.get('/', ( req, res ) => {
  res.render('index.ejs')
})

headerParser(app)

const port = app.get('port')
app.listen( port, ( ) => {
  console.log(`Node app is running on port http://localhost:${port} `)
})
