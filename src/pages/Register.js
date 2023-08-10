import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='flex w-[100%] bg-[#FFEDE8] py-[120px]'>
            <div className='flex flex-col w-[40%] mr-auto ml-auto'>
                <span className='text-center pb-[60px] text-[32px] font-[700] gap-[65px]'>Register</span>
                <div className='flex flex-col bg-white px-[50px] rounded-[8px] py-[65px] gap-[30px]'>
                    {/* <span className='text-center text-[20px] font-[500] text-[#222]'>Welcome Back!</span>
                    <span className='text-center'>Don't have an account? <Link className='text-[#5BBB7B] hover:text-[#5bbb7bc4]' to="/register">Sign Up!</Link></span> */}
                    <form className='flex flex-col gap-[20px]'>
                        <div className='flex gap-[20px]'>
                            <div className='flex w-[50%] justify-end'>
                                <Link className='flex rounded-[30px] bg-[#5BBB7B] hover:bg-[#5bbb7bc9] px-[20px] py-[10px] border' to="">
                                    {/* <svg className="svg-inline--fa fa-user w-[16px] h-[16px] my-[11.5px] text-black hover:text-[#5BBB7B]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505.941 475.059l-136.002-136.002c31.211-35.808 50.061-82.102 50.061-132.557C420 101.803 327.197 9 214 9S8 101.803 8 215s92.803 206 206 206c50.455 0 96.748-18.85 132.557-50.061l136.002 136.002c10.001 10.001 23.188 15.53 37.443 15.53s27.442-5.529 37.443-15.53c20.585-20.586 20.585-53.98 0-74.566zM214 361c-86.019 0-156-69.981-156-156s69.981-156 156-156 156 69.981 156 156-69.981 156-156 156z"></path></svg> */}
                                    <span className='text-[15px] font-[500] leading-[28px] text-[#222]'>Freelancer</span>
                                </Link>

                            </div>
                            <div className='flex w-[50%]'>

                                <Link className='flex rounded-[30px] px-[5px] py-[10px]' to="">
                                    {/* <svg className="svg-inline--fa fa-user w-[16px] h-[16px] my-[11.5px] text-black hover:text-[#5BBB7B]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505.941 475.059l-136.002-136.002c31.211-35.808 50.061-82.102 50.061-132.557C420 101.803 327.197 9 214 9S8 101.803 8 215s92.803 206 206 206c50.455 0 96.748-18.85 132.557-50.061l136.002 136.002c10.001 10.001 23.188 15.53 37.443 15.53s27.442-5.529 37.443-15.53c20.585-20.586 20.585-53.98 0-74.566zM214 361c-86.019 0-156-69.981-156-156s69.981-156 156-156 156 69.981 156 156-69.981 156-156 156z"></path></svg> */}
                                    <span className='text-[15px] font-[500] leading-[28px] text-[#222]'>Employer</span>
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

    )
}
