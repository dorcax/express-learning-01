import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DarkmodeContext } from "../navbar/themeContext";

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
      <div className='p-24 font-["Poppins", sans-serif]'>
        <div>
          <h2 className="py-3 md:text-3xl font-serif sm:text-4xl">IT posts</h2>
          <div className="border border-solid w-full">
            <div className="w-14 h-0.5 bg-black"></div>
          </div>
        </div>
        <div className="pt-8">
          <div className="grid  md:grid-cols-3 gap-6  sm:grid-cols-1">
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
                            <h2 className="md:text-2xl font-serif py-2 hover:text-[#4579A0] sm:text-3xl">
                              {er.title.charAt(0).toUpperCase() +
                                er.title.slice(1)}
                            </h2>
                            <p className="md:text-lg font-normal hover:text-[#4579A0] sm:text-xl">
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
    </div>
  );
};

export default Startup;
