// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))



// ROUTES CONTROLLER
app.use('/places', require('./Controllers/places'))
  
//homepage
app.get('/', (req, res) => {
    res.render('home')
  })  

//error
app.get('*', (req, res) => {
  res.render('error404')
});

//listen for connections
app.listen(process.env.PORT)
  
 
   