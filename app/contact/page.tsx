import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'


const ContactPage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <div className="flex justify-center mt-[20vh] text-[30px] font-normal italic my-[15rem] mx-[5rem] mb-[3rem] p-8 hover:cursor-default">
        <h1>Contacts</h1>
    </div>
    <div className="flex justify-center gap-16 text-[1.2rem] mb-[20rem] hover:cursor-default">
        <p><b>Gmail:</b> abc@gmail.com</p>
        <p><b>|</b></p>
        <p><b>Phone:</b> 030000909</p>
    </div>
    <Footer/>
    </>
  )
}

export default ContactPage