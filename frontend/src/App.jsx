import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [auth, setAuth] = useState('')
  const [task, setTask] = useState('')
  const [goal, setGoals] = useState('')

  useEffect(() => { 
    const getAuth = async () => { 
      try { 
        const request = await axios.get('http://localhost:3001')
        console.log(request)
      } catch(error) { 
        console.log(error)
      }
    }
    getAuth()
  },[])

  return (
    <>
    <div>react app</div>
     </>
  )
}

export default App
