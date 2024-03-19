import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { DarkmodeContext } from "../navbar/themeContext";

const Lifestyle = () => {
  const { theme, toggleTheme } = useContext(DarkmodeContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const lifefeature = async () => {
      try {
        const result = await axios.get("https://blog-website-lbk2.onrender.com/blog",{withCredentials:true});
        setData(result.data);
      } catch (error) {
        setError(error.data.message);
      }
    };
    lifefeature();
  }, []);
  return (
    <div>
      <div className='md:p-24 font-["Poppins", sans-serif] sm:px-10 sm:py-12'>
        <div>
          <h2 className="capitalize text-3xl font-serif py-3 ">
            lifestyle posts
          </h2>
          <div className="border border-solid  border-gray-400 w-full">
            <div className="w-14 bg-black h-px"></div>
          </div>
          <div className="py-10">
            <div className="grid  gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {data &&
                data.length > 0 &&
                data.map((er) => {
                  if (er.category === "LIFESTYLE") {
                    return (
                      <div>
                        <Link to={`/blog/single/${er.id}`}>
                        <div className={`${
                      theme === "light"
                        ? 'shadow-md pb-6 '
                        : 'shadow-md pb-6 bg-[#f6f6f6] text-black'
                    }   `}>
                          <div>
                            <img
                              src={er.imageUrl}
                              alt="lifestyle"
                              srcset=""
                              className="w-full rounded-md"
                            />
                            <div className="text-center pb-6 sm:py-4">
                              <h2 className="text-2xl py-2 font-serif hover:text-[#4579A0]">
                                {er.title.charAt(0).toUpperCase() +
                                  er.title.slice(1)}
                              </h2>
                              <p className="text-lg font-normal hover:text-[#4579A0]">
                                {er.content.substring(0, 74)}......
                              </p>
                             
                            </div>
                          </div>
                        </div></Link>
                       
                      </div>
                    );
                  }
                })}
            </div>
           
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Lifestyle;
