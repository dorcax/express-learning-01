import React, { useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
 // import { query } from 'express'
const ModalSearch = ({closeMenu}) => {
    const [search,setSearch] =useState("")
    const[searchResult,setSearchResult] =useState([])
    const handleSubmit =async()=>{
      try {
        const response =await axios.get(`http://localhost:4000/blog/search?search=${search}`)
        setSearchResult(response.data)
        setSearch("")

        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    const searchButtonClicked = (e) => {

      e.preventDefault()
      handleSubmit()
    };
  const handlesearch =(e)=>{
// if(!e.target.value) return setSearch("")
setSearch(e.target.value)
    }
  return (
    <div className='fixed top-0 left-0 flex flex-row justify-center items-center w-full h-full bg-gray-900 opacity-80'>
        <form action="" method="post" onSubmit={searchButtonClicked} >
            <div className='flex justify-between items-center py-3'>
                <h2 className='text-white text-3xl '>Search here</h2>
                <div onClick={closeMenu}> <i className="fas fa-times text-white text-4xl"></i></div>
            </div>
            <div className=' '> 
                <input type="text" name="search" id="" value={search} onChange={handlesearch} className='border border-solid w-96 py-5  rounded-l-lg  focus:outline-none  capitalize text-xl '  placeholder='search for blog post '/>
                <button className='bg-[#4579A0]  text-white capitalize text-xl  w-24  py-[1.35rem] rounded-r-lg' >search</button>
                </div> 

                <div className='flex justify-center py-2 border border-solid bg-white shadow-lg my-3 rounded-lg h-40'>
        <ul className=' '>
        {searchResult && searchResult.map(item => {
        return  <li key={item.id} className='text-lg'><Link to={`/blog/single/${item.id}`}>{item.title}</Link></li>
})}
        
      </ul>
        </div>
        </form>
  
    
       </div>
    
  )
}

export default ModalSearch