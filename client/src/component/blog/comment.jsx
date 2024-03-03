import React, { useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import Getcomment from './Getcomment'

const comment = () => {
    const{blogId} =useParams()
    const[content,setContent] =useState(" ")
    const[message,setMessage] =useState(null)

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
    <div>
       <div>
       <form action="" method="post" onSubmit={handleSubmit}>
            <h2>commnent</h2>
            <div>
                <textarea name="content"   value={content} onChange={(e)=>setContent(e.target.value)} id="" cols="20" rows="4" className='border border-solid w-80'></textarea>
            </div>
            <button type='submit'>post comment</button>
        </form>
       </div>
      <Getcomment/>
        
        </div>
        
        
  )
}

export default comment