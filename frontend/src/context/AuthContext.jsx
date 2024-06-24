import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    
    const [ auth, setAuth ] = useState({
        user: null,
        token: ""
    })

    const [ user, setUser ] = useState({
        isAuthenticated: false,
        username: "",
        email: ""
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

        // const token = localStorage.getItem("authToken")
        // if(token){
        //     axios.get("http://localhost:4000/api/auth/user", {
        //         headers: { Authorization: `Bearer ${token}`},
        //     })
        //     .then( (response) => {
        //         setUser({
        //             ...user,
        //             username: response.data.username,
        //             email: response.data.email,
        //             isAuthenticated: true
        //         })
        //     })
        //     .catch( (err) => {
        //         console.log(err);
        //     })
        // }
    }, [])
    
    return(
        <>
            <AuthContext.Provider value={{ auth, setAuth, user}}>
                { children }
            </AuthContext.Provider>
        </>
    )
}

// auth context

export const useAuth = () => useContext(AuthContext)