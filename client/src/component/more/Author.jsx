import React from 'react'
import img2 from "./img/author.jpeg"
import { TypeAnimation } from 'react-type-animation'
const Author = () => {
  return (
    <div className='md:p-24 font-["Poppins", sans-serif] sm:px-10 sm:py-12'>
      <div className='flex md:flex-row justify-center items-center sm:flex-col'>
        <div className=''><img src={img2} alt="profile" srcset=""  width={250} height={250} className='rounded-full' /></div>
        <div className='px-6 text-center'>
          <h2 className='py-4'><span className='capitalize text-2xl '>hello,i'am </span>
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'frontend developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'backend developer',
        1000,
        'full stack developer',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.4em', display: 'inline-block',textTransform:"capitalize" }}
      repeat={Infinity}
    /></h2>
    
          <p className=' leading-normal text-lg  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit? Fugit ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at corporis omnis sapiente deleniti atque ea maxime consequatur optio perspiciatis.</p>
          <div>
            <ul className="flex  py-4">
              <li className=" flex items-center  text-lg justify-center px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:py-2 hover:rounded-full hover:border hover:border-solid sm:text-xl sm:py-3">
                <i class="fab fa-facebook-f"></i>
              </li>
              <li className="flex items-center  justify-center  text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:py-2 hover:rounded-full hover:border hover:border-solid sm:text-xl sm:py-3">
                <i class="fab fa-instagram"></i>
              </li>
              <li className="flex items-center justify-center text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:py-2 hover:rounded-full hover:border hover:border-solid sm:text-xl sm:py-3">
                <i class="fab fa-linkedin-in"></i>
              </li>
              <li className="flex items-center justify-center text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:py-2 hover:rounded-full hover:border hover:border-solid sm:text-xl sm:py-3">
                <i class="fab fa-github"></i>
              </li>
              <li className="flex items-center justify-center text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:py-2 hover:rounded-full hover:border hover:border-solid sm:text-xl sm:py-3">
                <i class="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author