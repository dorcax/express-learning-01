import React, { useContext, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Getcomment from './Getcomment'
import { AuthContext } from '../Sign/Loginhandlers'

const comment = () => {
    const{blogId} =useParams()
    const[content,setContent] =useState(" ")
    const[message,setMessage] =useState(null)
    const{IsAuthenticated,login} =useContext(AuthContext)

    const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response =await axios.post(`http://localhost:4000/blog/${blogId}/comment`,{
                content:content
            },{
                withCredentials:true
            })
            console.log("created")
            setMessage(response.data)
            setContent("")
        } catch (error) {
        console.log(error)
        }
    }
  return (
    <div className='max-w-5xl py-8 mx-auto'> 
        <div>{!IsAuthenticated && <h2 className='text-lg text-[#4579A0] '>You must be logged in to comment.<Link to="/login">Login</Link></h2> }</div>
        {IsAuthenticated &&
        <div>
        <form action="" method="post" onSubmit={handleSubmit}>
         
            <div className=' capitalize  text-lg my-3'>   <h2>comments :</h2></div>
             <div className='flex justify-start  '>
          
             <input type="text" name="content" id="" onChange={()=>setContent(e.target.value)} className='border border-solid w-10/12 py-2  rounded-md focus:outline-none hover:border-[#4579A0] px-3 shadow-lg h-14' placeholder='write comment'/>
 
             <button type='submit' className='border border-solid m-2 p-5 capitalize text-[#fff] bg-[#4579A0] flex items-center rounded-md h-8'>post</button>
             </div>
            
         </form>
        </div>
        
        }
       
        <Getcomment/>
     
        
        </div>
        
        
  )
}

export default comment