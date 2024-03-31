import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../Sign/Loginhandlers";
import DeleteComment from "./DeleteComment";
import Editcomment from "./Editcomment";

const Getcomment = () => {
  const {isAuthenticated,currentUser} = useContext(AuthContext);
  const { blogId } = useParams();
  const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://blog-website-lbk2.onrender.com/blog/${blogId}/comment`
        );
        console.log("blog get");
        setData(response.data);
      } catch (error) {}
    };
    fetch();
  }, []);
  const handleEditToggle = (commentId) => {
    setData((prevData) =>
      prevData.map((er) => {
        if (er.id === commentId) {
          return {
            ...er,
            isEdit: !er.isEdit // Toggle isEdit for the clicked comment
          };
        }
        return er;
      })
    );
  };

  return (
    <div className=" max-w-5xl md:py-8 sm:py-12  mx-auto">
      {data &&
        data.length > 0 &&
        data.map((er) => {
          return (
            <div className="border-b border-solid my-2 py-1 ">
              <div className="flex  ">
                <div className="border border-solid w-14 h-14 rounded-full">
                  <img src="" alt="" srcset="" />
                </div>
                <div className="px-4   capitalize text-md ">
                  <h2 className="">{er.user.name}</h2>
                  <p className="py-2 text-sm ">
                    {new Date(er.createdAt).toLocaleDateString()}
                  </p>
                  <div className=" flex  flex-row items-center  justify-center">
                    {er.isEdit ? (
                        <Editcomment commentId={er.id} isEdit={er.isEdit}   onEditToggle={() => handleEditToggle(er.id)}/>
                    ) : (
                      <>

                       <div className=" ">
                        <p className=" text-lg lowercase">{er.content}</p>
                        {isAuthenticated && currentUser && (currentUser.id === er.userId )&& (
                        <Editcomment commentId={er.id} isEdit={er.isEdit}  onEditToggle={() => handleEditToggle(er.id)}/>)}
                     </div> 

                      </>
                    )}

                  </div>
             
{isAuthenticated && currentUser && (currentUser.id === er.userId )&& (
                      <div className="flex items-center">
            
                        <div className="">
                          <DeleteComment commentId={er.id} />
                        </div>
                      </div>
                    )}
                </div>
                <div>
                  

                </div>
              </div>
            </div>

          );
        })}
    </div>

  );
};

export default Getcomment;

