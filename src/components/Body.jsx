import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex '>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2'>
        <img src="./src/assets/blue-shape.svg" alt="1st" className='-rotate-45 h-64 md:h-72 lg:h-[400px]' />
        <img src="./src/assets/pink-shape.svg" alt="2st" className='absolute -rotate-[3deg] h-64 md:h-72 lg:h-[400px]' />
        <img src="./src/assets/purple-shape.svg" alt="3st" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'  />
        <img src="./src/assets/hero-model.png" alt="4st" className='absolute h-64 md:h-72 lg:h-[400px]' />
      </div>
      <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'> Host your website in less than 5 minutes </h1>
        <p className='font-lato text-gray-400'> With Hosterr, get your website up and runnning in no less than 5 minutes with the most competitive pricing available online. </p>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input type="email" placeholder='Enter email address' className='rounded-md px-4 py-3 placeholder:text-gray-400' />
          <button className='rounder-md px-4 py-3 bg-blue-400 hover:bg-red-400 text-white '>Join Waitlist</button>
        </form>
        <div className='flex gap-2'>
          <img src="./src/assets/Cheakmark.svg" alt="" />
          <p className='font-lato text-gray-400'>NO Spam ,ever . Unsubscribe anytime.</p>
        </div>
      </div>
      </div>
  )
}

export default Body