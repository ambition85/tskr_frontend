import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'


export default function DashBoard() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex w-[80%] bg-[#ebe3e3]'>
        {/* <div className='w-[80%] m-auto'>
          <span>Dashboard</span>
          <div className="grid grid-cols-4 gap-4">
            <div className='bg-[#ebeef2] rounded-[10%] p-[30px] items-center'>Posted Services</div>
            <div className='bg-[#ebeef2] rounded-[10%] p-[30px] items-center'>Completed Services</div>
            <div className='bg-[#ebeef2] rounded-[10%] p-[30px] items-center'>In Queue Services</div>
            <div className='bg-[#ebeef2] rounded-[10%] p-[30px] items-center'>Review</div>
          </div>

          <div class="grid grid-cols-6 md:grid-cols-1 lg:grid-cols-3 gap-1">
            <div class="col-span-6 md:col-span-1 lg:col-span-3 bg-gray-200">Content 1</div>
            <div class="col-span-6 md:col-span-1 lg:col-span-1 bg-gray-300">Content 2</div>
            <div class="col-span-6 md:col-span-1 lg:col-span-1 bg-gray-400">Content 3</div>
          </div>

          <div className="">

          </div>

          <div>

          </div>

        </div> */}
      </div>
    </div>
  )
}
