import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='w-[full] shrink-0 bg-[#222] pb-[30px]'>
      <div className='w-[80%] m-auto text-left'>
        <div className='flex pt-[27px] pb-[25px]'>
          <div className='flex w-[50%]'>
            <Link className="font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]" to="/login">Terms of Sevice</Link>
            <Link className="font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]" to="/login">Privacy Policy</Link>
            <Link className="font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]" to="/login">Site Map</Link>
          </div>
          <div className='flex w-[50%] justify-end items-center'>

            <Link className='font-sans text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px] text-[17px] font-[700] leading-[28px]' to="/">Follow Us</Link>
            {/* facebook */}
            <Link className='text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            {/* twitter */}
            <Link className='text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Link>
            {/* instagram */}
            <Link className='text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

            </Link>
            {/* linkedin */}
            <Link className='text-[#FFFFFFA1] hover:text-[#FFF] mr-[20px]' to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>

            </Link>
          </div>
        </div>

        <hr className='text-[#fff] opacity-[0.07]' />

        <div className='pt-[60px] flex justity-center'>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1] pb-[30px]'>
                <li>About</li>
                <Link className='hover:text-[#FFF] pt-[20px]' to=""><li>About Us</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Become Seller</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Jobs on Freeio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Pricing</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Services Freeio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Terms of Service</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Login</li></Link>
              </ul>
            </div>
          </div>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1]'>
                <li>Categories</li>
                <Link className='hover:text-[#FFF] pt-[20px]' to=""><li>Design & Creative</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Development & IT</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Music & Audio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Programming & Tech</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Digital Marketing</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Finance & Accounting</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Writing & Translation</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Trending</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Lifestyle</li></Link>
              </ul>
            </div>
          </div>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1]'>
                <li>Support</li>
                <Link className='hover:text-[#FFF] pt-[20px]' to=""><li>Help & Support</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>FAQ Freeio</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Contact Us</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Services</li></Link>
                <Link className='hover:text-[#FFF]' to=""><li>Terms of Service</li></Link>
              </ul>
            </div>
          </div>
          <div className='w-[25%]'>
            <div>
              <ul className='flex flex-col gap-[10px] text-[#FFFFFFA1]'>
                <li>Subscribe</li>
                <Link className='pt-[40px]' to=""><li>Quick Links</li></Link>
                <Link className='flex hover:text-[#FFF]' to="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-briefcase-fill" viewBox="0 0 16 16"> <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" /> <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" /> </svg>
                  <li className='pl-[5px]'>Careers</li></Link>
                <Link className='flex hover:text-[#FFF]' to="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                  <li className='pl-[5px]'>Report an Issue</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[80%] m-auto text-left font-sans text-[14px] leading-[28px] text-[#FFFFFFA1] font-[400] pt-[20px]'>
        © 2023 Tskr.com – All Rights Reserved
      </div>
    </div>
  )
}
