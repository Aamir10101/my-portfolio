// import Link from "next/link";
// import { BsFacebook } from "react-icons/bs";
import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black">
        <>
  
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <Image src="/pics/logo1.jpg" alt="Amir" width={100} height={100} 
     className="w-[76px]"
     />
        <span className="ml-3 text-xl ">Amir Portfolio</span>
      </a>
      <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      @2024 Amir Portfolio

</p>
 
    </div>
  </footer>
</>

      
    </div>
  )
}

export default Footer
