"use client"
import React from 'react'
import Navbar from '../navbar'
import MachineContainer from './MachineContainer'

const Dashboard = () => {
  return (
    <div className='h-[100vh]'>
        <Navbar />
        <MachineContainer />
    </div>
  )
}

export default Dashboard
