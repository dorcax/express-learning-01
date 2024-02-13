import React, { useState } from 'react'
import { blog } from '../../../data/category'
const Dropdown2 = () => {
  const[dropdown,setdropdown] =useState(false)
  const handleClick =()=>{
    setdropdown(!dropdown)
  }
  const HandleClick =()=>{
    setdropdown(dropdown)
  }
  return (
    <div className='relative'>
        <ul className={dropdown?'bg-white shadow-md w-48   border border-solid border-slate-300 capitalize font-["Poppins", sans-serif] absolute top-3.5 hidden ':'bg-white shadow-md w-48   border border-solid border-slate-300 capitalize font-["Poppins", sans-serif] absolute top-3.5'} onClick={handleClick}>
            {blog.map((er,index)=>{
                return <li key={index} className='py-2 text-lg font-normal block text-slate-500' onClick={HandleClick}>{er}</li>
            })}
        </ul>
    </div>
  )
}

export default Dropdown2