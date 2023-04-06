const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = 3000


app.get('/', (req, res) => {
  res.send('home')
})


app.get('/one', (req, res) => {
  res.send('one')
})




app.listen(PORT, ()=>{
	console.log(`Black Box server is running......port ${PORT}`)
})
