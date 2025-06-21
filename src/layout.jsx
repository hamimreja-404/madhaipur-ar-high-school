import React from 'react'
import Navbar from './Components/Header/Header.jsx'
import Footer from './Components/Footer/footer.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
