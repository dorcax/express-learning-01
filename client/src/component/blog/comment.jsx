import React, { useContext, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Getcomment from './Getcomment'
import { AuthContext } from '../Sign/Loginhandlers'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const comment = () => {
    const{blogId} =useParams()
    const[content,setContent] =useState(" ")
    const[message,setMessage] =useState(null)
    const{isAuthenticated,login} =useContext(AuthContext)
    const [error, setError] = useState([]);

  const ValidateForm = () => {
    let valid = true;
    const newError = [];

    if (!content.trim()) {
      newError.content = "comment is not allowed to  be empty";
      valid = false;
    }
    setError(newError);
    return valid;
  }
    const handleSubmit =async(e)=>{
        e.preventDefault()
        if(ValidateForm()){
            try {
                const response =await axios.post(`https://blog-website-lbk2.onrender.com/blog/${blogId}/comment`,{
                    content:content
                },{
                  headers:{
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                  }
                })
                console.log("created")
                setMessage(response.data)
                toast.success("comment has been created")
    
                setContent("")
            } catch (error) {
            console.log(error)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data.msg);
                setError(error.response.data.msg)
               
           
              } 
          
            }
        }
      
    }
  return (
    <div className='max-w-5xl py-8 mx-auto'> 
    
    {error.content && (
              <div style={{ color: "red" }}>{error.content}</div>
            )}
          

        <div>{!isAuthenticated && <h2 className='md:text-lg text-xl text-center text-[#4579A0] '>You must be logged in to comment.<Link to="/login">Login</Link></h2> }</div>
        {isAuthenticated &&
        <div>
        <form action="" method="post" onSubmit={handleSubmit}>
         
            <div className=' capitalize  text-lg my-3 '>   <h2>comments :</h2></div>
             <div className='flex justify-start  flex-col lg:flex-row '>
          
             <input type="text" name="content" id=""  value={content} onChange={(e)=>setContent(e.target.value)} className='border border-solid lg:w-10/12 h-[80px]  rounded-md focus:outline-none hover:border-[#4579A0] px-3 shadow-lg  sm:w-full' placeholder='write comment'/>
 
             <button type='submit' className='border border-solid m-2 p-2 capitalize text-[#fff] bg-[#4579A0] flex items-center rounded-md  mx-auto sm:w-28 justify-center sm:text-2xl'>post</button>
             </div>
            
         </form>
        </div>
        
        }
       
        <Getcomment/>
     
        
        </div>
        
        
  )
}

export default comment