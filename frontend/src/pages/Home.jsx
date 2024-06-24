import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { auth, setAuth } = useAuth()



  return (
    <>
      {
        JSON.stringify(auth)
      }
    </>
  )
}

export default Home