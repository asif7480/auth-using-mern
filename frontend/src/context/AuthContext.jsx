import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
      user: null,
      token: ""
    })  
    
    useEffect( () => {
      const data = localStorage.getItem("auth")
      if(data){
        const parseData = JSON.parse(data)
        setAuth({
          ...auth,
          user: parseData.user,
          token: parseData.token
        })
      }
    }, [])
    return(
        <>
            <AuthContext.Provider value={{ auth, setAuth }}>
                { children }
            </AuthContext.Provider>
        </>
    )
}

// auth context

export const useAuth = () => useContext(AuthContext)