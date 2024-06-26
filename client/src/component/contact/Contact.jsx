import React from "react";
import { Link } from "react-router-dom"
import Footer from "../footer/Footer";
export const Contact = () => {
  return (
    <div>
           <div className='md:p-24 font-["Poppins", sans-serif] sm:px-10 sm:py-12'>
      <div className="w-full">
        <h1 className="text-3xl capitalize font-serif py-3 ">
          leave us a message
        </h1>
        <div className="border border-solid border-gray-400 ">
          <div className="w-20 bg-black h-px"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 content-start py-10 sm:grid-cols-1 ">
          <div>
            <div className="max-w-2xl">
              {/* <h2 className="md:text-3xl font-serif capitalize sm:text-2xl">
                contact details
              </h2> */}
              <p className=" md:text-lg sm:text-xl">
                Everything start with a Hello! We’re here to answer any
                questions you may have and create an effective solution for your
                instructional needs. We have a dedicated support center for all
                of your support needs. We usually get back to you within 12-24
                hours.
              </p>
            </div>

            <div classsName="">
              <div className="flex py-10">
                <span className="text-xl text-gray-400  ">
                  
                  <i class="fas fa-map-marker-alt"></i>
                </span>

                <div className="px-4 capitalize  ">
                  <h2 className="text-2xl font-serif hover:text-[#4579A0] ">address</h2>
                  <p className="text-md text-gray-400 ">
                    24,akorohunfayo fadeyi street lagos
                  </p>
                </div>
              </div>
              <div className="flex py-6">
                <span className="text-gray-400 text-xl ">
                  
                  <i class="fas fa-phone"></i>
                </span>

                <div className="capitalize px-4 hover:text-[#4579A0]">
                  <h2 className="font-serif capitalize text-2xl ">call us</h2>
                  <p className="text-md text-gray-400 ">
                    24,akorohunfayo fadeyi street lagos
                  </p>
                </div>
              </div>
              <div className="flex py-6">
                <span className="text-xl text-gray-400 ">
                  
                  <i class="fas fa-envelope"></i>
                </span>

                <div className="capitalize px-4">
                  <h2 className="capitalize text-2xl font-serif hover:text-[#4579A0]">message</h2>
                  <p className="text-md text-gray-400 ">
                    24,akorohunfayo fadeyi street lagos
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">

            <form action="">
                <div className="mb-5">
                  <input type="text" name="" id=""  placeholder=" your name*" className="w-full border  py-5 capitalize focus:outline-none px-4 hover:border-1  hover:border-[#4579A0] leading-tight rounded-md  text-lg"/>
                </div>
                <div className="mb-5">
                  <input type="text" name="" id=""  placeholder=" your email*" className="w-full border  py-5 capitalize focus:outline-none px-4 hover:border-1  hover:border-[#4579A0] leading-tight rounded-md  text-lg"/>
                </div>
                <div className="mb-5">
                  <input type="text" name="" id=""  placeholder=" your subject*" className="w-full border  py-5 capitalize focus:outline-none px-4 hover:border-1  hover:border-[#4579A0] leading-tight rounded-md  text-lg"/>
                </div>
                <div className="mb-5">
                    <textarea name="" id="" cols="" rows="4" placeholder="type your message here*" className="w-full capitalize border rounded-md py-3 focus:outline-none hover:border-1 hover:border-[#4579A0] text-lg "></textarea>
                </div>

                <button className=" border-2 border-[#4579A0]  border-solid   text-center my-10 py-3  mx-auto px-6 capitalize text-lg flex justify-center items-center text-[#4579A0] rounded-lg hover:bg-[#4579A0] hover:text-white ">
              <Link>Send message</Link>
            </button>
               
        
            </form>
          </div>
        </div>
      </div>
   
    </div>
    <div>
    <Footer/>
    </div>
    </div>
 
  );
};
