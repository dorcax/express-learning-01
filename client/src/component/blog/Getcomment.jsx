import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Sign/Loginhandlers";
import DeleteComment from "./DeleteComment";
import Editcomment from "./Editcomment";
import { PostContext } from "../context/PostContext";

const Getcomment = () => {
  const {isAuthenticated,currentUser} = useContext(AuthContext);
  const{content,dispatch} =useContext(PostContext)
  const { blogId } = useParams();
  // const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://blog-website-lbk2.onrender.com/blog/${blogId}/comment`
        );
        console.log(response.data);
        // setData(response.data);
        dispatch({type:"get_post",payload:response.data.content})
       
      } catch (error) {
        if(error.response){
          console.log(error.response.data.msg);
          // setError(error.response.data.msg)
        }
      }
    };
    fetch();
  }, [dispatch]);

  // const handleEditToggle = (commentId) => {
  //   setData((prevData) =>
  //     prevData.map((err) => {
  //       if (err.id === commentId) {
  //         return {
  //           ...err,
  //           isEdit: !err.isEdit // Toggle isEdit for the clicked comment
  //         };
  //       }
  //       return err;
  //     })
  //   );
  // };

  return (
    <div className=" max-w-5xl md:py-8 sm:py-12  mx-auto">
      {content &&
        content.length >0  && content.map((er) => {
          console.log("the data include the following",er.user.name)
            // Check if er object is not undefined and has all required properties
    // if (er && er.content && er.userId) {
          return (
//             <div className="border-b border-solid my-2 py-1 ">
//               <div className="flex  ">
//                 <div className="border border-solid w-14 h-14 rounded-full">
//                   <img src="" alt="" srcset="" />
//                 </div>
//                 <div className="px-4   capitalize text-md ">
                  <h2 className="">{er.user.name}</h2>
//                   <p className="py-2 text-[12px] ">
//                     {new Date(er.createdAt).toLocaleDateString()}
//                   </p>
//                   <div className=" flex  flex-row items-center  justify-center">
//                     {er.isEdit ? (
//                         <Editcomment commentId={er.id} isEdit={er.isEdit}   onEditToggle={() => handleEditToggle(er.id)}/>
//                     ) : (
//                       <>

//                        <div className=" ">
//                         <p className=" text-lg lowercase">{er.content}</p>
//                         {isAuthenticated && currentUser && (currentUser.id === er.userId )&& (
//                       <div className="flex gap-8 "> 
//                          <Editcomment commentId={er.id} isEdit={er.isEdit}  onEditToggle={() => handleEditToggle(er.id)}/>
//                           <div className="">
//                           <DeleteComment commentId={er.id} />
//                         </div>
//                       </div>
//                         )}
//                      </div> 

//                       </>
//                     )}

//                   </div>
// {/*              
// {isAuthenticated && currentUser && (currentUser.id === er.userId )&& (
//                       <div className="flex items-center">
            
                      
//                       </div>
//                     )} */}
//                 </div>
//                 <div>
                  

//                 </div>
//               </div>
//             </div>

          )
        // }
          // else {
          //   return null; // or handle the case where required properties are missing
          // }
        })}
    </div>

  );
};

export default Getcomment;

