import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const MenuCard = (props) => {
  return (
    <div className='bg-white w-full  lg:w-1/4  p-3 rounded-lg '>
        <div className=''>
            <img  className="rounded-xl   "src={props.img} alt='img'/>
        </div>
        <div className=' mt-5'>
            <div className='flex flex-row justify-between'>
                <h3 className='font-semibold text-xl '>{props.title}</h3>
                <h3 className='font-semibold text-xl'>{props.value}</h3>
            </div>
            <div className='flex flex-row justify-between mt-3'>
                <div className='flex gap-2'>
                    <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor rounded-lg transition-all'>Hot</button>
                    <button className='px-3 text-sm border-2 border-brightColor bg-backgroundColor hover:text-brightColor rounded-lg transition-all'>Cold</button>
                </div>
                <span className='flex items-center bg-backgroundColor px-3 py-2 rounded-full ' >   <FaShoppingCart  size={20}/></span>
             
            </div>
        </div>
    </div>
  )
}

export default MenuCard