import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MainLayouts() {
  return (
    <div>
      {/* Navbar */}
      <div className='h-20'>
        <Navbar></Navbar>
      </div>

      <div className='min-h-[calc(100vh-300px)] w-11/12 mx-auto'>
        {/*dynamic section */}
        <Outlet></Outlet>
      </div>

      {/* footer section */}
      <Footer></Footer>
    </div>
  )
}
