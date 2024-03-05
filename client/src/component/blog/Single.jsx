import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment";

import { Link } from "react-router-dom";

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
                  <p className="text-center lowercase mb-4 border border-solid border-[#579A0] w-20 h-8 rounded-full flex items-center justify-center mx-auto ">{er.category}</p>
                  <div>
                    <img src={er.imageUrl} alt="image" srcset="" className="object-cover w-full" />
                  </div>
                  <div className="flex justify-between p-3 mt-4 border-b border-slate-500 mx-auto w-full max-w-5xl text-xl">
                    <p> {new Date(er.createdAt).toLocaleDateString()}</p>
                    <p>
                      {(er.content.length / 1000).toFixed(0)} mins read
                      {/* {er.content} */}
                    </p>
                  </div>
                  <div className="p-3 max-w-5xl mx-auto  post-content indent-12 break-normal leading-loose text-lg">
                    {er.content}
                  </div>
                  {/* <Link to={`/blog/${er.id}/comment`}>comment</Link> */}
                </div>
             
              );
            })}
          
        </div>
       <Comment/>
       
      </div>
    </div>
  );
};

export default Single;
