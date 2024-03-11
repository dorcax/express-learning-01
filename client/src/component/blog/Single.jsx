import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Single = () => {
  const { blogId } = useParams();
  const [data1, setData] = useState([]);
  // add comment
  // fetch each user blog
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blog/${blogId}`,
          {
            withCredentials: true,
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    fetchData();
  }, []);

  // making  a post request for the like
  const [like, setLike] = useState([]);
  const [toggleLike, setToggleLike] = useState(false);
  // like post
  // const fetchLike = async () => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:4000/blog/${blogId}/like`,
  //       null,

  //       { withCredentials: true }
  //     );
  //     // )
  //     setLike(response.data);
  //     console.log("like created");
  //     setToggleLike(true);
  //   } catch (error) {
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.log(error.response.data);
  //       toast.error(error.response.data.msg)
  //     }
  //   }
  // };

  // const handleLike = () => {
  //   fetchLike();
  // };
  // // delete post
  // const deleteLike =async()=>{
  //   try {
  //     const response =await axios.delete(`http://localhost:4000/blog/${blogId}/like/${1}`,{withCredentials:true})
  //     setLike(response.data)
  //     setToggleLike(false)
  //   } catch (error) {
  //     if(error.response){
  //       toast.error(error.response.data.msg)
  //     }
  //   }
  // }
  // const handleLikeToggle = async () => {
  //   try {
  //     if (toggleLike) {
  //       // Unlike the post
  //       const response = await axios.delete(`http://localhost:4000/blog/${blogId}/like/1`, {
  //         withCredentials: true,
  //       });
  //       setToggleLike(false);
  //       toast.success("Post unliked");
  //     } else {
  //       // Like the post
  //       const response = await axios.post(`http://localhost:4000/blog/${blogId}/like`, null, {
  //         withCredentials: true,
  //       });
  //       setToggleLike(true);
  //       toast.success("Post liked");
  //     }
    // } catch (error) {
    //   if (error.response) {
    //     toast.error(error.response.data.msg);
    //   }
    
  return (
    <div>
      <div className='px-24 font-["Poppins", sans-serif]'>
        <div>
          {data1 &&
            data1.length > 0 &&
            data1.map((er) => {
              return (
                <div className=" p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
                  <h2 className=" text-3xl mt-10 p-3 text-center font-serif  max-w-2xl mx-auto lg:text-4xl capitalize">
                    {er.title}
                  </h2>
                  <p className="text-center lowercase mb-4 border border-solid border-[#579A0] w-20 h-8 rounded-full flex items-center justify-center mx-auto ">
                    {er.category}
                  </p>
                  <div>
                    <img
                      src={er.imageUrl}
                      alt="image"
                      srcset=""
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="flex justify-between p-3 mt-4 border-b border-slate-500 mx-auto w-full max-w-5xl text-xl">
                    <p> {new Date(er.createdAt).toLocaleDateString()}</p>
                    <p className="">
                      {(er.content.length / 1000).toFixed(0)} mins read
                      {/* {er.content} */}
                    </p>
                    
                    <div  className={"text-red-400 text-[#4579A0]"} >
                      
                      <i class="fa-solid fa-thumbs-up px-4"></i>
                    </div>
                  </div>
                  <div className="p-3 max-w-5xl mx-auto  post-content indent-12 break-normal leading-loose text-lg">
                    {er.content}
                  </div>
                  {/* <Link to={`/blog/${er.id}/comment`}>comment</Link> */}
                </div>
              );
            })}
        </div>
        <Comment />
      </div>
    </div>
  );
};


export default Single;
