'use client'
import React from 'react'
import Analytics from './Analytics'
import MachineCardContainer from './MachineCardContainer'
import Sort from './Sort'

const MachineContainer = () => {
  return (
    <div className='h-full'>
        <Analytics />
        <MachineCardContainer />
        <p>hello</p>
    </div>
  )
}

export default MachineContainer
