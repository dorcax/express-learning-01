import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer/Footer";

const Lifestyle = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lifefeature = async () => {
      try {
        const result = await axios.get("http://localhost:4000/blog",{withCredentials:true});
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
          <h2 className="capitalize text-3xl font-bold py-3">
            lifestyle posts
          </h2>
          <div className="border border-solid  w-full">
            <div className="w-14 bg-black h-0.5"></div>
          </div>
          <div className="pt-8">
            <div className="grid grid-cols-3 gap-6">
              {data &&
                data.length > 0 &&
                data.map((er) => {
                  if (er.category === "LIFESTYLE") {
                    return (
                      <div>
                        <div className="my-6">
                          <div>
                            <img
                              src={er.imageUrl}
                              alt="lifestyle"
                              srcset=""
                              className="w-full rounded-md"
                            />
                            <div>
                              <h2 className="text-2xl py-2 font-semibold hover:text-[#4579A0]">
                                {er.title.charAt(0).toUpperCase() +
                                  er.title.slice(1)}
                              </h2>
                              <p className="text-lg font-normal hover:text-[#4579A0]">
                                {er.content.substring(0, 74)}......
                              </p>
                              <p className="text-md py-2 hover:text-[#4579A0]">
                                {er.user.name.charAt(0).toUpperCase() +
                                  er.user.name.slice(1)}{" "}
                                <span className="text-gray-400">in</span> design
                              </p>
                            </div>
                          </div>
                        </div>
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
