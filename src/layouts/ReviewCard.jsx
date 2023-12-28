import React from 'react'
import { BsFillStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import { FaQuoteRight } from "react-icons/fa"
const ReviewCard = (props) => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 bg-white p-3   rounded-lg gap-5'>
        <div className=' flex flex-row items-center gap-3 '>
        <div className='w-1/4'>
            <img  className="rounded-full" src={props.img} alt='img'/>
        </div>
        <div>
            <h2 className='font-semibold text-lg'> {props.title}</h2>
        <div className='flex'>
            <BsFillStarFill className="text-brightColor"/>
            <BsFillStarFill className="text-brightColor"/>
            <BsFillStarFill className="text-brightColor"/>
            <BsStarHalf className="text-brightColor"/>
        </div>
        </div>
        <span className='ml-16'><FaQuoteRight className="text-backgroundColor" size={42}/></span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, cum cupiditate, asperiores sint quia, labore at facilis ea mollitia ducimus ratione assumenda? Exercitationem facere vero minus molestias doloribus aliquid nulla!</p>
  
    </div>
  )
}

export default ReviewCard