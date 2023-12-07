const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')


app.use(cors())
app.get('/', async (req,res) => { 
  console.log('hit auth service')
  res.send({msg: 'response from auth service'})
})

app.listen(3001, ()=> { 
  console.log('application running on port 3001')
})