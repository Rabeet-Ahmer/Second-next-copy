import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-[#3b2d2d] text-white flex justify-between rounded-full h-[18vh] items-center">
        <h1 className="font-extrabold italic text-4xl ml-16 underline hover:cursor-default">OOPS</h1>
        <ul className="flex font-[Poppins] font-semibold gap-20 mr-8">
            <li className='hover:opacity-70 hover:underline'><Link href="/" target="_blank">Home</Link></li>
            <li className='hover:opacity-70 hover:underline'><Link href="/contact" target="_blank">Contact Us</Link></li>
            <li className='hover:opacity-70 hover:underline'><Link href="/services" target="_blank">Services</Link></li>
        </ul>
    </div>
  )
}

export default Header