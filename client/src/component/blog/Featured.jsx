
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Featured = () => {


  const [dataList, setDataList] = useState([]);

  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/blog",{
          withCredentials:true
        });
        setDataList(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataList]); //The empty array [] as the second argument ensures this effect runs once, like componentDidMount()

  return (
    <div>
      <div className='p-24 font-["Poppins", sans-serif]'>
        <div className=" ">
          <h2 className="capitalize text-3xl font-bold py-3">featured posts</h2>
          <div className="border border-solid   ">
            <div className="border border-solid border-black w-14"></div>
          </div>
          <div className="pt-8">
            <div className="grid grid-cols-3 gap-6 ">
              {dataList &&
                dataList.length > 0 &&
                dataList.map((er) => {
                  return (
                    <div className="">
                      <div className=" my-6">
                        <img
                          src={er.imageUrl}
                          alt="img"
                          srcset=""
                          className="rounded-md  w-full"
                        />

                        <div className=" ">
                          <h2 className="text-2xl  py-2 font-semibold  hover:text-[#4579A0]">
                            <Link to={er.id}>
                              {er.title.charAt(0).toUpperCase() +
                                er.title.slice(1)}
                            </Link>
                          </h2>
                          <p className="text-lg  font-normal hover:text-[#4579A0]">
                            {er.content.substring(0, 70)}....
                          </p>
                          <p className="py-2 text-md hover:text-[#4579A0]">
                            {er.user.name.charAt(0).toUpperCase() +
                              er.user.name.slice(1)}{" "}
                            <span className="text-gray-400">in</span> design
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

     
      </div>
      <Footer />
    </div>
  );
};

export default Featured;
// #c8d8e4 -LAVENDER
// #52ab98 -LIGHT GREEN
