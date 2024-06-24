import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const { auth, setAuth } = useAuth()

  const handleLogout = () => {
    setAuth({
        ...auth,
        user: null,
        token: ""
    })
    localStorage.removeItem("auth")
    alert("logout successfully")
  }
  
  return (
    <>
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            {
                !auth.user ? (
                    <>
                        <li>
                            <NavLink to="/login">login</NavLink>
                        </li>

                        <li>
                            <NavLink to="/register">register</NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/login" onClick={handleLogout}>logout</NavLink>
                        </li>
                    </>
                )
            }



        </ul>
    </nav>
    </>
  )
}

export default Header