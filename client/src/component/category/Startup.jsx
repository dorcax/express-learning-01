import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DarkmodeContext } from "../navbar/themeContext";
import Footer from "../footer/Footer";

const Startup = () => {
  const { theme, toggleTheme } = useContext(DarkmodeContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedpost = async () => {
      try {
        const result = await axios.get("https://blog-website-lbk2.onrender.com/blog", {
          withCredentials: true,
        });
        setData(result.data);
      } catch (error) {
        setError(error.result.message);
      }
    };
    fetchedpost();
  }, []);
  return (
    <div>
      <div className='md:p-24 font-["Poppins", sans-serif] sm:px-10 sm:py-12 min-h-screen'>
        <div>
          <h2 className="py-3 text-3xl font-serif ">IT posts</h2>
          <div className="border border-solid border-gray-400 w-full">
            <div className="w-14 h-px bg-black"></div>
          </div>
        </div>
        <div className="pt-8">
          <div className="grid  gap-6  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
            {data &&
              data.length > 0 &&
              data.map((er) => {
                if (er.category === "IT") {
                  return (
                    <div className={`${
                      theme === "light"
                        ? 'shadow-md pb-6 '
                        : 'shadow-md pb-6 bg-[#f6f6f6] text-black'
                    }   `}>
                      <Link to={`/blog/single/${er.id}`}>
                        
                        <div>
                          <img src={er.imageUrl} alt="It images" srcset="" />
                          <div className="text-center pb-6 sm:py-4">
                            <h2 className="text-2xl font-serif py-2 hover:text-[#4579A0] ">
                              {er.title.charAt(0).toUpperCase() +
                                er.title.slice(1)}
                            </h2>
                            <p className="text-lg font-normal hover:text-[#4579A0]">
                              {er.content.substring(0, 75)}..............
                            </p>
                           
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Startup;
