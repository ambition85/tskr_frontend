import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = ()=>{
        
        navigate('/user-dashboard');
    }

    return (
        <div className='flex w-[100%] bg-[#FFEDE8] py-[120px]'>
            <div className='flex flex-col w-[40%] mr-auto ml-auto font-sans'>
                <span className='text-center pb-[60px] text-[32px] font-[700] gap-[65px]'>Log In</span>
                <div className='flex flex-col bg-white px-[50px] rounded-[8px] py-[65px] gap-[30px]'>
                    <span className='text-center text-[20px] font-[500] text-[#222]'>Welcome Back!</span>
                    <span className='text-center'>Don't have an account? <Link className='text-[#5BBB7B] hover:text-[#5bbb7bc4]' to="/register">Sign Up!</Link></span>
                    <form onSubmit={handleLogin} className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-left font-sans text-[15px] font-[500] leading-[28px] text-[#222]'>Email Address</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' placeholder='Email' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label className='text-left font-sans text-[15px] font-[500] leading-[28px] text-[#222]'>Password</label>
                            <input className='border-[#e9e9e9] h-[55px] rounded-[4px] border pl-[10px]' type='password' placeholder='Password'/>
                        </div>
                        <div className='flex'>
                            <div className='flex w-[50%]'>
                                <input className='' type='checkbox' />
                                <span className='text-[16px] font-[400] leading-[28px] text-[#222]'>Remember me</span>
                            </div>
                            <div className='flex justify-end w-[50%]'>
                                <Link className='text-[16px] font-[400] leading-[28px] text-[#222]' to="/">Forgotten Password?</Link>
                            </div>
                        </div>
                        <button className='font-sans text-[15px] leading-[28px] text-[#fff] font-[700] bg-[#5BBB7B] rounded-[4px] py-[12px] hover:bg-[#5bbb7bc9]' type='submit'>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
