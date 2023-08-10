import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Register() {
    return (
        <>
        <div className='flex w-[100%] bg-[#FFEDE8] py-[120px]'>
            <div className='flex flex-col w-[40%] mr-auto ml-auto'>
                <span className='text-center pb-[60px] text-[32px] font-[700] gap-[65px]'>Register</span>
                <div className='flex flex-col bg-white px-[50px] rounded-[8px] py-[65px] gap-[30px]'>
                    {/* <span className='text-center text-[20px] font-[500] text-[#222]'>Welcome Back!</span>
                    <span className='text-center'>Don't have an account? <Link className='text-[#5BBB7B] hover:text-[#5bbb7bc4]' to="/register">Sign Up!</Link></span> */}
                    <form className='flex flex-col gap-[20px]'>
                        <div className='flex gap-[20px]'>
                            <div className='flex w-[50%] justify-end'>
                                <Link className='flex rounded-[30px] bg-[#5BBB7B] hover:bg-[#5bbb7bc9] px-[20px] py-[10px] border items-center' to="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" /> </svg>
                                    <span className='text-[15px] font-[500] leading-[28px] text-[#222] pl-[10px]'>Freelancer</span>
                                </Link>

                            </div>
                            <div className='flex w-[50%]'>

                                <Link className='flex rounded-[30px] px-[5px] py-[10px] items-center' to="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" /> </svg>
                                    <span className='text-[15px] font-[500] leading-[28px] text-[#222] pl-[10px]'>Employer</span>
                                </Link>
                                {/* <span className='text-[15px] font-[500] leading-[28px] text-[#222]'>Employer</span> */}
                            </div>

                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-left text-[15px] font-[500] leading-[28px] text-[#222]'>First Name *</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' placeholder='First Name' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-left text-[15px] font-[500] leading-[28px] text-[#222]'>Last Name *</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' type='password' placeholder='Last Name' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-left text-[15px] font-[500] leading-[28px] text-[#222]'>Email *</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' placeholder='Email' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-left text-[15px] font-[500] leading-[28px] text-[#222]'>Password *</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' type='password' placeholder='Password' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-left text-[15px] font-[500] leading-[28px] text-[#222]'>Confirm Password *</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' type='password' placeholder='Confirm Password' />
                        </div>
                        <div className='flex'>
                            <input className='' type='checkbox' />
                            <span className='text-[16px] font-[400] leading-[28px] text-[#222]'>You accept our Terms and Conditions and Privacy Policy</span>
                        </div>
                        <button className='font-sans text-[15px] leading-[28px] text-[#fff] font-[700] bg-[#5BBB7B] rounded-[4px] py-[12px] hover:bg-[#5bbb7bc9]'>Register Now</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        </>

    )
}
