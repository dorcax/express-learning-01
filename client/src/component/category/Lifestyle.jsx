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
      <div className='p-24 font-["Poppins", sans-serif]'>
        <div>
          <h2 className="capitalize md:text-3xl font-serif py-3 sm:text-4xl">
            lifestyle posts
          </h2>
          <div className="border border-solid  w-full">
            <div className="w-14 bg-black h-0.5"></div>
          </div>
          <div className="py-10">
            <div className="grid md:grid-cols-3 gap-6 sm:grid-cols-1">
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
                              <h2 className="md:text-2xl py-2 font-serif hover:text-[#4579A0] sm:text-3xl">
                                {er.title.charAt(0).toUpperCase() +
                                  er.title.slice(1)}
                              </h2>
                              <p className="md:text-lg font-normal hover:text-[#4579A0] sm:text-xl">
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
