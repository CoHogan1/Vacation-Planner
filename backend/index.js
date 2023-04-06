const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = 3000


app.get('/test', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, ()=>{
	console.log(`Black Box server is running......port ${PORT}`)
})
