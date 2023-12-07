const express = require('express')
const app = express()

app.get('/', async (req,res) => { 
  res.send({msg: 'response from task service'})
})

app.listen(3001, ()=> { 
  console.log('application running on port 3001')
})