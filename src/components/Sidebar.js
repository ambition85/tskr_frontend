import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='flex flex-col w-[20%] m-auto'>

            {/* avatar */}
            <div className='flex pt-[30px]'>
                <div className='flex w-[50%] justify-end pr-[10px]'>
                    <img className="w-[90px] h-[90px] rounded-[50%]" src="/image/avatar1.png" />
                </div>
                <div className='flex w-[50%] justify-start pl-[10px]'>
                    <ul className='flex-col text-[18px] text-[#222]'>
                        <Link to=""><li className='hover:text-[#5BBB7B]'>Samuel<br/>Wilson</li></Link>
                        <Link to=""><li className='hover:text-[#5BBB7B]'>$0.00</li></Link>
                        <Link to=""><li className='hover:text-[#5BBB7B]'>View Profile</li></Link>
                    </ul>
                </div>
            </div>


            {/* Navbars */}
            <div className='flex pl-[50px] pt-[50px]'>
                <ul className='flex-col text-[#222]'>
                    <Link className='flex items-center side_margin'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" /> <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" /> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B] '>Dashboard</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-right-circle" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" /> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>My Proposals</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Favorite</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24 12.0417C24 8.70495 21.2951 6 17.9583 6H12.0417C8.70495 6 6 8.70495 6 12.0417C6 15.3784 8.70495 18.0833 12.0417 18.0833H13.2V21C13.2 21 24 19.5417 24 12.0417Z" fill="#333333"/> <path d="M18.5 28C18.5 30.21 16.71 32 14.5 32C12.29 32 10.5 30.21 10.5 28C10.5 25.79 12.29 24 14.5 24C16.71 24 18.5 25.79 18.5 28Z" fill="#333333"/> <path d="M14.5 34C11.6631 34 6 35.4293 6 38.2667V42H23V38.2667C23 35.4293 17.3369 34 14.5 34Z" fill="#333333"/> <path d="M33.5 32C35.71 32 37.5 30.21 37.5 28C37.5 25.79 35.71 24 33.5 24C31.29 24 29.5 25.79 29.5 28C29.5 30.21 31.29 32 33.5 32Z" fill="#333333"/> <path d="M33.5 34C30.6631 34 25 35.4293 25 38.2667V42H42V38.2667C42 35.4293 36.3369 34 33.5 34Z" fill="#333333"/> <path d="M32.0417 7C28.7049 7 26 9.70495 26 13.0417C26 20.5417 35.6 22 35.6 22V19.0833H35.9583C39.2951 19.0833 42 16.3784 42 13.0417C42 9.70495 39.2951 7 35.9583 7H32.0417Z" fill="#333333"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Meetings</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16"> <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Messages</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-dash" viewBox="0 0 16 16"> <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/> <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Bids</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box-arrow-in-up" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/> <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Statements</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/> <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Payouts</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-award" viewBox="0 0 16 16"> <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/> <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Verification</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg width="24" strokeWidth="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> <path d="M8 10H16M8 6H12M8 14H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> <path d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Edit Profile</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Delete Profile</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z"/> </g> </svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Change Password</li>
                    </Link>

                    <Link  className='flex items-center side_margin'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9-4-4m4 4-4 4m4-4H9"/></svg>
                        <li className='text-left font-sans margin_li text-[16px] font-[500] leading-[40px] pl-[10px] hover:text-[#5BBB7B]'>Logout</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
