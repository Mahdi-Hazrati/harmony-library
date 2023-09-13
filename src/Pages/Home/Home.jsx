import React from 'react'
import Header from "../../Components/Header/Header"
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      {/* Outlet is Child element in Home page route */}
    </main>
  )
}

export default Home