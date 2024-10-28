import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
function HomeAdds() {
  return (
    <div className='w-[100%]  md:py-[30px] md:px-[40px]'>
    <div className='contenar w-full bg-sky-600 py-[20px] px-[30px] border rounded-lg  grid grid-cols-1 md:grid-cols-2'>
    <div className=' flex md:hidden'>
      <img src="/public/images/unnamed__1_-removebg-preview.png" alt="" />
    </div>
    <div className='mt-[10px] ml-[20px] flex  flex-col justify-center items-center md:items-start'>
      <h4 className='text-slate-300 text-[16px] mr-[20px] tracking-normal'>LATEST TECHNOLGY ADDED</h4>
      <h3  className='mt-[10px] tracking-normal  text-[32px] text-white'>Applw iPad 10.2 9th Gen - 2024</h3>
      <p className='mt-[30px] text-white text-[28px] tracking-wide flex justify-center md:justify-start items-center my-[10px]'>$ 986</p>
      <Link to='/product' className='flex justify-center items-center md:w-40 text-white gap-1 bg-black py-[10px] px-[30px] rounded-lg hover:bg-white hover:text-black transition-all duration-500 font-semibold'>Shop  <FaArrowRight  className='transform transition-transform duration-500 hover:translate-x-4'/></Link>
    
    </div>
  
    <div className='hidden md:flex '>
      <img src="/public/images/unnamed__1_-removebg-preview.png" alt="" />
      
    </div>
    </div>


  </div>
  )
}

export default HomeAdds
