import React from 'react'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div>
        <div className=' flex  flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor '>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>
                About Us
            </h1>
            <div className='flex flex-col lg:flex-row  items-center gap-5'>
                <div className='w-full lg:w-3/4 '>
                    <img  className="rounded-lg"src={require('../assets/img3.jpg')}/>
                </div>
                <div className='w-full lg:w-2/4 space-y-3 p-4'>
                    <h2 className='font-semibold text-2xl'>
                        What Makes Our Coffee Special?
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fugit necessitatibus nobis sunt fugiat, nesciunt consequuntur enim perferendis voluptas mollitia ex laborum eveniet possimus provident qui quia reprehenderit asperiores id.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iusto saepe pariatur voluptatibus accusantium quisquam perferendis, non numquam aliquam laboriosam, molestias ad magnam sint error. Magni fuga voluptatum totam modi.</p>
                    <Button title="Learn More"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About