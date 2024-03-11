import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Footer from "../footer/Footer";
import {Link} from "react-router-dom"
import { DarkmodeContext } from "../navbar/themeContext";

const Culture = () => {
  const { theme, toggleTheme } = useContext(DarkmodeContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCulture = async () => {
      try {
        const result = await axios.get("http://localhost:4000/blog",{withCredentials:true});
        setData(result.data);
      } catch (error) {
        setError(error.result.message);
      }
    };
    fetchCulture();
  }, []);
  return (
    <div>
      <div className='p-24 font-["Poppins", sans-serif]'>
        <div>
          <h2 className="text-3xl font-serif py-3 capitalize">culture post</h2>
          <div className="border border-solid w-full">
            <div className="w-14 h-0.5 bg-black"></div>
          </div>
          <div className="py-10">
            <div className="grid grid-cols-3 gap-6">
              {data &&
                data.length > 0 &&
                data.map((er) => {
                  if (er.category === "CULTURE") {
                    return  <div className={`${
                      theme === "light"
                        ? 'shadow-md pb-6 '
                        : 'shadow-md pb-6 bg-[#f6f6f6] text-black'
                    }   `}>
                      <Link to={`/blog/single/${er.id}}`}>
                      <div className="">

                        
<img
  src={er.imageUrl}
  alt=""
  srcset=""
  className="w-full rounded-md"
/>
<div className=" text-center pb-6">
  <h2 className="text-2xl font-serif hover:text-[#4579A0] py-2">
    {er.title.charAt(0).toUpperCase() +
      er.title.slice(1)}
  </h2>
  <p className="text-lg font-normal hover:text-[#4579A0]">
    {er.content.substring(0, 80)}.......
  </p>
  {/* <p className="text-md py-2 hover:text-[#4579A0]">
    {er.user.name.charAt(0).toUpperCase() +
      er.user.name.slice(1)}
  
  </p> */}
</div>
</div></Link>
                       
                      </div>
                    
                  }
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Culture;
