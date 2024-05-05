import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DarkmodeContext } from "../context/themeContext";

const Editcomment = ({ commentId ,isEdit,onEditToggle}) => {
  const { blogId } = useParams();
  const [data, setData] = useState([]);
  const [content, setContent] = useState("");
  const{theme} =useContext(DarkmodeContext)
  
 

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://blog-website-lbk2.onrender.com/blog/${blogId}/comment/${commentId}`,
          { headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
          } }
        );
        setData(response.data);
        setContent(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:4000/blog/${blogId}/comment/${commentId}`,
        { content: content },
        { headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }}
      );
      console.log("Comment updated:", response.data);
      setData(response.data);
      setContent(response.data.content);
      // setIsEdit(false);
      onEditToggle()
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };
  // handle edit toggle


 

  return (
    <div className="
    ">
      <form action="" method="post" onSubmit={handleEdit}
      >
        <div>
          { isEdit && data && (
            <div  className={`${
              theme === "light"
                ? 'bg-white    py-4 font-["Poppins", sans-serif]'
                : 'bg-[#002130]     py-4 font-["Poppins", sans-serif] text-black '
            }  `}>
              <input
                name="content"
                value={content}
                id=""
                onChange={(e) => setContent(e.target.value)}
                className="border border-solid  border-[#4579A0] w-60 md:w-[600px] text-md sm:py-4 my-2 rounded-lg focus:outline-none sm:py-6"
              />
            </div>
          )}
        </div>

        <button
          className="px-0 capitalize text-sm py-2 "
         
       onClick={onEditToggle}
        >
          
          {isEdit ? "Cancel" : "Edit"}
        </button>
        {isEdit && (
          <button type="submit" className="px-3 capitalize text-sm py-2 ">
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default Editcomment;
