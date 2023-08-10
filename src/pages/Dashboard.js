import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'


export default function DashBoard(){
    return (
      <div className='flex'>
        <Sidebar />
        <div className='flex w-[80%]'>
          hello
        </div>
      </div>
    )
}
