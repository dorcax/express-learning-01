import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Sign/Loginhandlers";
import DeleteComment from "./DeleteComment";
import Editcomment from "./Editcomment";

const Getcomment = ({isEdit}) => {
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
                  <p className="pb-2">{new Date(er.createdAt).toLocaleDateString()}</p>
                  <div className=" flex w-full flex-col ">
    
              {!isEdit? <div className="border-b border-solid pb-2"><p>{er.content}</p></div>:<>{isEdit&& <div className=""> <Editcomment commentId={er.id}/></div>} </>
      }

{isAuthenticated && <div className="flex">
      
     
     <div className="flex items-center"> <Editcomment commentId={er.id}/></div>
       <div className="flex items-center"><DeleteComment commentId ={er.id}/></div>
      </div> }
      
      </div>
          
          
       
              
               {/* if(i
                      <div>
                      <div>
                  
                      <Editcomment commentId={er.id}/></div>
                     <div><DeleteComment commentId ={er.id}/></div>
                     </div>
           
               } */}
               
              </div>
              <div>
                </div>
              </div>

      
                
                
              
              </div>
            // </div>
          );
        })}
             
    </div>


    // </div>

    // </div>
  );
};

export default Getcomment;
