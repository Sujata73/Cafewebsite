import React from 'react'
import { BsFillStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import Button from './Button'

const ProductCard = (props) => {
  return (
    <div className='bg-white rounded-lg   '>
        <img className='p-5 rounded-md' src={props.img} alt="img"/>
        <div className='flex flex-col items-center gap-3 p-5'>
            <h2 className='text-xl font-semibold'>{props.title}</h2>
        <div className='flex'>
            <BsFillStarFill className="text-brightColor"/>
            <BsFillStarFill className="text-brightColor"/>
            <BsFillStarFill className="text-brightColor"/>
            <BsStarHalf className="text-brightColor"/>
        </div>
        <h3 className='font-semibold text-lg'>$15.99</h3>
        <Button  title="ADD TO CART"/>
        </div>
    </div>
  )
}

export default ProductCard