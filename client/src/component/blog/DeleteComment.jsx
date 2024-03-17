import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteComment = ({commentId}) => {
  const[deleted,Setdeleted] =useState([])
  const[error,setError] =useState([])
  const{blogId}=useParams()

  const handleDelete = async()=>{
    try {
      const response =await axios.delete(`http://localhost:4000/blog/${blogId}/comment/${commentId}`,{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })
        Setdeleted(response.data)
        toast.success("comment deleted")
    } catch (error) {
      
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data.msg);
     
        setError(error.response.data.msg)
        toast.error(error.response.data.msg)
       
   
      } 
    }
  }
  return (
    <div>
     
      <button className="px-3   capitalize  md:text-sm py-2 sm:text-xl" onClick={handleDelete} >
    delete
   </button></div>
  )
}

export default DeleteComment