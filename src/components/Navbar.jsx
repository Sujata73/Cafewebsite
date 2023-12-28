import React, { useState } from 'react'
import { SiCoffeescript } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";


import Button from '../layouts/Button';

const Navbar = () => {
    const[menu,setMenu]=useState(false)
    const handleChange=()=>{
        setMenu(!menu)
    }
  return (
    <div className='fixed w-full z-50  '>
    <div className=' flex justify-between p-5 px-5 lg:px-32 bg-gradient-to-r  from-white  bg-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <div className='flex   items-center gap-3  '>
        <span>< SiCoffeescript className='text-2xl' /></span>
        <h1 className='text-2xl'>Cafepulse</h1>
         </div>
        <nav className='list-none  hidden md:flex gap-8 items-center text-lg font-medium '>
          <li className='hover:text-brightColor cursor-pointer hover:border-b-2 border-black'>Home</li>
          <li className='hover:text-brightColor cursor-pointer hover:border-b-2 border-black'>Menu</li>
          <li className='hover:text-brightColor cursor-pointer hover:border-b-2 border-black'>About</li>
          <li className='hover:text-brightColor cursor-pointer hover:border-b-2 border-black'>Products</li>
          <li className='hover:text-brightColor cursor-pointer hover:border-b-2 border-black'>Review </li>
        </nav>
        <div className=' hidden md:flex'><Button title="Login"/></div>
        <div className='md:hidden flex items-center '>
            {menu?(<AiOutlineClose  className="z-10"onClick={handleChange} />):(<RxHamburgerMenu onClick={handleChange}/>)}
        </div>
        <ul
         
         className={`${
           menu
             ? 'absolute w-full  top-0 left-0  transition-all  duration-400 text-white bg-brightColor  flex flex-col items-center justify-center gap-10  h-96'
             : 'absolute left-[-100%]'
         }`}
       > <li className='hover:text-black cursor-pointer hover:border-b-2 border-white'>Home</li>
          <li className='hover:text-black cursor-pointer hover:border-b-2 border-white'>Menu</li>
          <li className='hover:text-black cursor-pointer hover:border-b-2 border-white'>About</li>
          <li className='hover:text-black cursor-pointer hover:border-b-2 border-white'>Products</li>
          <li className='hover:text-black cursor-pointer hover:border-b-2 border-white'>Review </li>  <Button className="" title="Login"/></ul>
        
        </div>
        </div>
  )
}

export default Navbar