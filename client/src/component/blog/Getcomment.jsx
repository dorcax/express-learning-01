import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Sign/Loginhandlers";
import DeleteComment from "./DeleteComment";

const Getcomment = () => {
    const{login,isAuthenticated,name} =useContext(AuthContext)
  const { blogId } = useParams();
  const [data, setData] = useState(null);

  
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blog/${blogId}/comment`,
          {
            withCredentials: true,
          }
        );
        console.log("blog get");
        setData(response.data);
      } catch (error) {}
    };
    fetch();
  }, []);
  return (
    <div className=" max-w-5xl py-8 mx-auto">
      {data &&
        data.length > 0 &&
        data.map((er) => {
      
          
          return (
            <div className="border-b border-solid my-2 py-1 ">
              <div className="flex  ">
                <div className="border border-solid w-14 h-14 rounded-full">
                  <img src="" alt="" srcset="" />
                </div>
                <div className="px-4 capitalize text-md">
                  <h2>{er.user.name}</h2>
                  <p>{new Date(er.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              <div className=" flex w-full justify-between items-center">
           <div>     <p>{er.content}</p></div>
           {isAuthenticated &&   <div className="
                    
                    "><DeleteComment/>
                 <button className="px-3 border border-solid  capitalize rounded-lg border-red-400 hover:bg-red-400 hover:text-white text-lg py-2">delete</button> </div>}
       
              
               
              </div>
              <div>
                
                
              
              </div>
            </div>
          );
        })}
             
    </div>


    // </div>

    // </div>
  );
};

export default Getcomment;
