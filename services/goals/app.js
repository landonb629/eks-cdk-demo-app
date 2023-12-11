const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({origin: true}));
app.get('/', async (req,res) => { 
  res.status(200).json({msg: 'OK'})
})

app.listen(3003, ()=> { 
  console.log('application running on port 3003')
})
