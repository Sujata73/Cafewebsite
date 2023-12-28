import React from 'react'
import ProductCard from '../layouts/ProductCard'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'




const Product = () => {
  return (
    <div className=' flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'> 
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>Our Products</h1>
        <div className='flex  flex-col md:flex-row gap-20 justify-center'>
          <ProductCard  img={img7} title="Nespresso"/>
          <ProductCard  img={img8} title="aeroPress"/>
          <ProductCard  img={img9} title="Chemex"/>
      
        </div>
    </div>
  )
}

export default Product