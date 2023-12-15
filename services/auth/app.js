const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

/**
 * auth -> 
 * 1. get username and password 
 * 2. hash the password (salt)
 * 3. generate JWT for password 
 */

app.use(cors({origin: true}));
app.use(express.json())
app.get('/', async (req, res) => { 
  res.status(200).json({msg: 'OK'})
})

app.post('/login', async (req,res) => { 
  try { 
    const { username, password } = req.body
    console.log(username);
    console.log(password);
    res.status(200).json({msg: 'OK'})
  } catch(error) { 
    console.log(error)
  }
  
})

app.post('/register', async (req, res) => { 
  try { 

  } catch(error) { 
     console.log(error);
     console.log(`ERROR registering user: ${error}`)
  }
})

app.listen(3001, ()=> { 
  console.log('application running on port 3001')
})