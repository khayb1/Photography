import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
   <div className='text-center bg-zinc-700 text-white text-lg py-2'>
    <p >© Copright. All rights reserved.</p>
    <div className='text-center flex justify-center p-4'>
        <a className='text-3xl hover:text-blue-800 ' href='http://facebook.com' > <FaFacebookF /> </a>  
        <a className='text-3xl mx-2 hover:text-red-600' href='http://instagram.com'> <FaInstagram /> </a>  
        <a className='text-3xl hover:text-green-600' href='http//wa.me/0543496077'> <FaWhatsapp /></a>
    </div> 
    <p> Designed by Kelvin.</p>
    </div>
    </>
  )
}
