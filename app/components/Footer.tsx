import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-[#3b2d2d] text-white flex justify-around items-center rounded-full mt-[25vh]">
        <p className=" mt-8 pb-8 hover:cursor-default">GIAIC 2024. All rights reserved.</p>
        <ul className="flex flex-col list-none ">
            <li className='hover:opacity-70 hover:underline'><Link href="/services">Our Services</Link></li>
            <li className='hover:opacity-70 hover:underline'><Link href="/contact" >Contact Us</Link></li>
            <li className='hover:opacity-70 hover:underline'><Link href="">Privacy Policy</Link></li>
        </ul>
        <div >
        <ul className="flex flex-col list-none">
            <li className='hover:opacity-70 hover:underline'><Link href="">Facebook</Link></li>
            <li className='hover:opacity-70 hover:underline'><Link href="">Instagram</Link></li>
            <li className='hover:opacity-70 hover:underline'><Link href="">Threads</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Footer