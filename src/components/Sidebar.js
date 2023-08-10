import React, { Component } from 'react'

export default function Sidebar() {
        return (
            <div className='flex flex-col w-[20%] px-[10px] py-[10px]'>

                {/* avatar */}
                <div className='flex'>
                    <div className='flex w-[50%] justify-end pr-[10px]'>
                        <img className="w-[90px] h-[90px] rounded-[50%]" src="/image/avatar1.png" />
                    </div>
                    <div className='flex w-[50%] justify-start pl-[10px]'>
                        <ul className='flex-col'>
                            <li>Samuel</li>
                            <li>Wilson</li>
                            <li>$0.00</li>
                            <li>View Profile</li>
                        </ul>
                        {/* <div className='flex-col'>
                <span>Samuel</span>
                <span>Wilson</span>
                <span>$0.00</span>
                <span>View Profile</span>
              </div> */}
                    </div>
                </div>


                {/* Navbars */}
                <div className='flex pl-[30px]'>
                    <ul className='flex-col'>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Dashboard</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>My Proposals</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Favorite</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Meetings</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Messages</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Bids</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Statements</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Payouts</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Verification</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Edit Profile</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Delete Profile</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Change Password</li>
                        <li className='text-left font-sans margin_li text-[18px] font-[500] leading-[40px]'>Logout</li>
                    </ul>
                </div>
            </div>
        )
}
