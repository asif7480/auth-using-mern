import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Header from '../components/Header'

const Home = () => {

  const { auth, setAuth } = useAuth()


  return (
    <>
      <Header />
      <h2>Home page</h2>
      {
        JSON.stringify(auth)
      }
    </>
  )
}

export default Home