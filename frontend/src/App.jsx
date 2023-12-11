import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [auth, setAuth] = useState('')
  const [task, setTask] = useState('')
  const [goal, setGoals] = useState('')

  useEffect(() => { 
    const getServiceHealth = async () => { 
        const svc = {
          auth: 'http://localhost:3001/',
          task: 'http://localhost:3002/',
          goal: 'http://localhost:3003/'
        }
        const services = Object.keys(svc)
        services.map(async (service) => { 
          try {
            let request = await axios.get(`${svc[service]}`)
            if (service == 'auth') { 
              setAuth(request.data.msg)
            } else if (service == 'task') { 
              setTask(request.data.msg) 
            } else {
              setGoals(request.data.msg)
            }
          } catch(error) { 
            console.log(error)
          }
        })
    }
    getServiceHealth()
  },[])

  return (
    <>
    <div>
      <h1>react microservice example</h1>
      <div>
        <ul>
          <li>auth service: {auth}</li>
          <li>task service: {task}</li>
          <li>goal service: {goal}</li>
        </ul>
      </div>
    </div>
     </>
  )
}

export default App
