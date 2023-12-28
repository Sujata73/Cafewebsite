import React from 'react'
import MenuCard from '../layouts/MenuCard'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

const menu = () => {
  return (
    <div>
      <div className=' min-h-screen flex flex-col justify-center md:px-32 px-5 bg-backgroundColor '>
        <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Clients</h1>
        <div className='flex gap-10 pb-8 flex-wrap justify-center'>  <MenuCard  className="" img={img1}  title="Expresso"/>
          <MenuCard  className=" " img={img1}  title="Expresso"/>
          <MenuCard  className="" img={img2}  title="cappuccino"/>
          <MenuCard  className="" img={img3}  title="Americano"/>
          <MenuCard  className="" img={img4}  title="Latte"/>
          <MenuCard  className="" img={img5}  title="Macchiato"/>
          <MenuCard  className="" img={img6}  title="Doppio"/>
        </div>
      
      </div>
    </div>
  )
}

export default menu