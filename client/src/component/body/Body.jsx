import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import useFetch from "../../customHook/featuredHook";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import { DarkmodeContext } from "../navbar/themeContext";

const Body = () => {
  const { theme, toggleTheme } = useContext(DarkmodeContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      // if (!cookies.token) {
      //   navigate("/login");
      // }
      try {
        const response = await axios.get("https://blog-website-lbk2.onrender.com/blog");
        setDataList(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); //The empty array [] as the second argument ensures this effect runs once, like componentDidMount()

  return (
    <div>
      <div className='p-24 font-["Poppins", sans-serif] '>
        <div className=" ">
          <h2 className="capitalize md:text-3xl font-serif py-3 sm:text-4xl">
            featured posts
          </h2>
          <div className="border border-solid   ">
            <div className="border border-solid border-black w-14"></div>
          </div>
          <div className="py-10">
            <div className="grid md:grid-cols-3 gap-6  sm:grid-cols-1 ">
              {dataList &&
                dataList.length > 0 &&
                dataList.map((er) => {
                  return (
                    <div 
                    // className=" pb-6"
                    
                    className={`${
                      theme === "light"
                        ? 'shadow-md pb-6 '
                        : 'shadow-md pb-6 bg-[#f6f6f6] text-black'
                    }   `}
                    >
                      <div className=" ">
                     <Link to={`/blog/single/${er.id}`}>
                     
                     <div className="">     <img
                            src={er.imageUrl}
                            alt="img"
                            srcset=""
                            className="rounded-md  w-full"
                          />
                        
                          </div>
                          <div className=" text-center sm:py-4">
                          <Link to={`/blog/single/${er.id}`}>
                            <h2 className="md:text-2xl  py-2 font-serif  hover:text-[#4579A0] sm:text-3xl  ">
                              <Link to={er.id}>
                                {er.title.charAt(0).toUpperCase() +
                                  er.title.slice(1)}
                              </Link>
                            </h2>
                            <p className="md:text-lg  font-normal hover:text-[#4579A0] sm:text-xl">
                              {er.content.substring(0, 80)}....
                            </p>
                            </Link>
                          </div>
                     </Link>
                        
                     
                      </div>
                    </div>
                  );
                })}
            </div>
            <button className=" border-2 border-[#4579A0]  border-solid  mx-auto text-center my-10 p-3 capitalize text-lg flex justify-center items-center text-[#4579A0] rounded-lg hover:bg-[#4579A0] hover:text-white">
              <Link>all featured posts</Link>
            </button>
          </div>
        </div>

        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
// #c8d8e4 -LAVENDER
// #52ab98 -LIGHT GREEN
