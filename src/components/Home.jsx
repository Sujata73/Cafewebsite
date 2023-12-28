import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className='flex  min-h-screen flex-col md:flex-row  md:justify-between items-center md:px-32 px-5 gap-20 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
    <div className='mt-14 w-full space-y-4 md:w-2/4 md:mt-0'>
        <h1 className=' font-semibold text-5xl  pt-8 pb-3 text-center md:text-start leading-tight'>Start your day with a streaming cup of coffee</h1>
        <p className='font-light '>Boost your productivity and build your mood with a glass of coffee in the morning</p>
        <div className='  mt-5 flex flex-row gap-8' >
            <Button title="ADD TO CARD"/>
            <Button title="MORE MENU"/>
        </div>
     </div>
    
     <div className='relative '> 
     <img className='rounded-full h-[400px] w-[400px]' src={require('../assets/home.jpg')} alt='coffee'/>
     <div className='bg-white absolute px-8 py-2 top-5 right-0 rounded-full shadow-xl'>
        <h1  className='font-semibold'>14k</h1>
     </div>
    
     <div className=' absolute bottom-0 -left-10 bg-white rounded-full px-8 py-2  shadow-xl'>
        <h2>Cappuccino</h2>
     </div>
     </div>

    </div>
   
  )
}

export default Home