import React from 'react'
import img from "./img/error.png"
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
const Error = () => {
  return (
    <div>
          <div className='md:p-24 font-["Poppins", sans-serif] sm:px-10 sm:py-12'>
      <div className='flex  md:flex-row justify-center  items-center sm:flex-col'>
        <div>
       <img src={img} alt="error image" srcset="" width={600} className='rounded-full' />
        </div>
        <div className='px-10 text-center'>
          <h2 className='md:text-8xl text-[#4579A0] font-bold sm:text-9xl sm:text-center  '>404</h2>
          <h3 className='capitalize py-4 font-semibold md:text-4xl text-wrap sm:text-3xl'>page not found</h3>
          <p className='text-lg text-wrap '>Sorry, we're offline right now to make our site even better. Please, come back later and check what we've been up to.</p>
       
       <button className="border-2 border-solid my-6 border-[#4579A0] px-6 py-3 rounded-md capitalize text-[#4579A0] text-lg hover:bg-[#4579A0] hover:text-[#fff] "><Link to="/">Back to home</Link></button>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>

  )
}

export default Error