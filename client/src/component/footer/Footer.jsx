import React from "react";

const Footer = () => {
  return (
    <div className='font-["Poppins", sans-serif]'>
      <div className="">
        <hr />
        <div className="flex flex-col justify-center items-center py-16">
          <div className="">
            <p className=" text-lg">
              <i className="far fa-copyright text-gray-400"></i>
              {new Date().getFullYear()} Design Blog . Made with
              <i class="fas fa-heart text-red-400"></i>
            </p>
          </div>
          <div>
            <ul className="flex  py-3">
              <li className=" flex items-center  text-lg justify-center px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover::py-2 hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-facebook-f"></i>
              </li>
              <li className="flex items-center  justify-center  text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover::py-2 hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-instagram"></i>
              </li>
              <li className="flex items-center justify-center text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover::py-2 hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-linkedin-in"></i>
              </li>
              <li className="flex items-center justify-center text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover::py-2 hover:rounded-full hover:border hover:border-solid">
                <i class="fab fa-github"></i>
              </li>
              <li className="flex items-center justify-center text-lg  px-4 text-gray-400 hover:text-[#4579A0] hover:w-10  hover:h-10 hover::py-2 hover:rounded-full hover:border hover:border-solid">
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
