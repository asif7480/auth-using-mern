import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/api/auth/register`, { username, email, password })
        .then( (response) => {
            console.log(response.data);
            window.alert("Successfully registered")
            navigate("/login")
        })
        .catch( (err) => {
            console.log(err);
            window.alert("User already Registered")
        })
  }

  return (
    <>
        <div>
            <h2>Registration Form</h2>
        </div>

        <form onSubmit={handleRegister}>
            username:
            <input 
                type="text"
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            email:
            <input 
                type="text"
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />


            password:
            <input 
                type="text"
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />  

            <input type="submit" value="register" />

        </form>
    </>
  )
}

export default Register