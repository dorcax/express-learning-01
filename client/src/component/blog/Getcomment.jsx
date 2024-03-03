import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'

const Getcomment = () => {
    const{blogId} =useParams()
    const[data,setData] =useState(null)
    useEffect(()=>{
        const fetch =async()=>{
            try {
                const response =await axios.get(`http://localhost:4000/blog/${blogId}/comment`,{
                    withCredentials:true
                })
                console.log("blog get")
                setData(response.data)
            } catch (error) {
                
            }
        }
        fetch()
    },[])
  return (
    <div>
        
        <div>
        <h2>comments</h2>
       
       
       <div>
        {data && data.length>0 && data.map((er)=>{
            return <div>

                <div>
                    <img src="" alt="" srcset="" />
                </div>
                <div>
                    <h2>@{er.user.name}</h2>
                    <p>{er.content}</p>
                    <div>
                        <button><Link to={`/blog/${er.id}/${er.co}`}>edit</Link></button>
                        <button>delete</button>
                    </div>

                </div>
            </div>
        })}
       </div>
       hello
        </div>
        
        
        </div>
  )
}

export default Getcomment