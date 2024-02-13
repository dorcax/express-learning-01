import React, { useState } from 'react'
import Dropdown from './dropdown/Dropdown'
import Dropdown2 from './dropdown/Dropdown2';
import { category, blog, more } from "../../data/category";
import Dropdown3 from './dropdown/Dropdown3';
const Navbar = () => {
  const[dropdown,setdropdown] =useState(false)
  const[dropdown1,setdropdown1]=useState(false)
  const[dropdown2,setdropdown2]=useState(false)
  const handleClick =()=>{
    setdropdown(!dropdown)
  }

  return (
    <div className='bg-white h-24 shadow-md py-6 font-["Poppins", sans-serif] '>
         <nav className='flex  items-center justify-around'>
            <div className='flex items-center'>
                <h3 className='text-blue-400 capitalize text-3xl px-2  font-bold'>  <span className='text-2xl text-center px-2'><i class="fas fa-edit"></i></span> design blog</h3>
            </div>
          <div className='flex items-center'>
            <ul className='flex items-center '>
                <li className='px-4 capitalize text-xl px-4 font-light hover:font-normal'>home</li>
                <li className='px-4 capitalize text-xl px-4 font-light hover:font-normal ' 
                

                onClick={handleClick}
                >categories <i className="fa-solid fa-chevron-down text-base "></i>
              {dropdown &&  <Dropdown  /> } 
                </li>
                <li className='px-4 capitalize text-xl px-4 font-light hover:font-normal' onClick={()=>setdropdown1(!dropdown1)} >blog <i className="fa-solid fa-chevron-down text-base"></i>
             
              {dropdown1 && <Dropdown2 />}  
      
                </li>
                <li className='px-4 capitalize text-xl px-4 font-light hover:font-normal'>more <i class="fa-solid fa-chevron-down text-base" onClick={()=>setdropdown2(!dropdown2)}></i>
               
              
               {dropdown2 &&<Dropdown3 />} 
                </li>
                <li className='px-4 capitalize text-xl px-4 font-light hover:font-normal'>contact</li>
                <span className='px-4 text-lg '><i class="fa-solid fa-magnifying-glass"></i></span>
            </ul>
      
            <div className='flex  items-center px-4'>
              <div className='w-14 h-14 border-blue-400 border-2 border-solid rounded-full text-center mx-6'></div>

            <div className="capitalize ">
            <h3 className='text-xl font-bold '>dorcas ibrahim</h3>
            <p className='text-base font-normal'>blog writer</p>
          </div>
          </div>
            </div>
            
          
        </nav> 

       
      
      
    </div>
  )
}

export default Navbar