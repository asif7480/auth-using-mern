import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"

const Login = () => {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const { auth, setAuth } = useAuth()


  const handleLogin = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:4000/api/auth/login`, {username, password})
        .then( (response) => {
            console.log(response.data);
            window.alert("login successfully")
            setAuth({
                ...auth,
                user: response.data.user,
                token: response.data.token
            })
            localStorage.setItem("auth", JSON.stringify(response.data))
            
            navigate("/")
        }) 
        .catch( (err) => {
            console.log(err);
        })
  }
  return (
    <>
        <div>
            <h2>Login Form</h2>
        </div>

        <form onSubmit={handleLogin}>
            username: 
            <input 
                type="text" 
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
            <br />

            password:
            <input 
                type="text" 
                placeholder='Enter password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            
            <input type="submit" value="login" />
        </form>
    </>
  )
}

export default Login