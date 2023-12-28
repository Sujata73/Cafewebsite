import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import  person1 from '../assets/person1.jpg'
import  person2 from '../assets/person2.jpg'
import  person3 from '../assets/person3.jpg'
const Review = () => {
  return (
    <div className=' lg:px-32 px-5 bg-backgroundColor min-h-screen  ' >
        <h1 className='font-semibold text-4xl text-center  pt-28 lg:pt-24'>Customer's Reviews</h1>
        <div className='flex flex-col lg:flex-row gap-5 justify-center  my-8 pb-20'><ReviewCard img={person1} title="sujata"/>
        <ReviewCard img={person2} title="shyam"/>
        <ReviewCard img={person3} title="ram"/>
        </div>
    </div>
  )
}

export default Review