import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const DeleteComment = () => {
  const[deleted,Setdeleted] =useState(false)
  const[error,setError] =useState(null)
  const{blogId,commentId}=useParams()

  const handleDelete = async()=>{
    try {
      const response =await axios.delete(`http://localhost:4000/blog/${blogId}/comment/${commentId}`,{withCredentials:true})
        Setdeleted(response.data)
    } catch (error) {
      console.error('Error deleting blog:', error);
          setError('Error deleting the blog. Please try again later.');
    }
  }
  return (
    <div><button className="px-3 mx-4 border border-solid  capitalize rounded-lg border-[#4579A0] hover:bg-[#4579A0] hover:text-white text-lg py-2" onClick={handleDelete}>
    edit
   </button></div>
  )
}

export default DeleteComment