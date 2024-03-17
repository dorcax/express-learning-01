import React from "react";

const Footer = () => {
  return (
    <div className='font-["Poppins", sans-serif]'>
      <div className="">
        <hr />
        <div className="flex flex-col justify-center items-center py-16">
          <div className="">
            <p className=" md:text-lg sm:text-2xl">
              <i className="far fa-copyright text-gray-400"></i>
              {new Date().getFullYear()} Design Blog . Made with
              <i class="fas fa-heart text-red-400"></i>
            </p>
          </div>
          <div>
            <ul className="flex  mt-5">
              <li className=" flex items-center  md:text-lg sm:text-2xl justify-center px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-facebook-f"></i>
              </li>
              <li className="flex items-center  justify-center  md:text-lg  sm:text-2xl px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10  hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-instagram"></i>
              </li>
              <li className="flex items-center justify-center md:text-lg sm:text-2xl  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10  hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-linkedin-in"></i>
              </li>
              <li className="flex items-center justify-center md:text-lg sm:text-2xl  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-github"></i>
              </li>
              <li className="flex items-center justify-center md:text-lg sm:text-2xl  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover:rounded-full hover:border hover:border-solid">
                <i class="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
