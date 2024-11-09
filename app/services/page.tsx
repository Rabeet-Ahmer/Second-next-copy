import React from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer'
import Hero from '../components/Hero'


const ServicesPage = () => {
  return (
      <>
      <Header/>
      <Hero/>
      <div className="flex justify-center my-[20rem] text-[30px] font-normal italic hover:cursor-default">
        <h1>Promising services coming soon!</h1>
        </div>
        <Footer/>
      </>
  )
}

export default ServicesPage