import React, { useContext, useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import Dropdown2 from "./dropdown/Dropdown2";
import { category, blog, more } from "../../data/category";
import Dropdown3 from "./dropdown/Dropdown3";
import Darkmode from "./darkmode";
import { DarkmodeContext } from "./themeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(DarkmodeContext);
  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const handleClick = () => {
    setdropdown(!dropdown);
  };

  // hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${
        theme === "light"
          ? 'bg-white  w-full  shadow-lg py-4 font-["Poppins", sans-serif]'
          : 'bg-[#002130]  w-full  shadow-lg py-4 font-["Poppins", sans-serif] text-white '
      }  flex  items-center px-20  justify-between md: flex `}
    >
      <div className="flex items-center">
        <h3
          className={
            theme === "light"
              ? "text-[#4579A0] capitalize text-2xl px-2  font-bold"
              : "text-[#4579A0] capitalize text-2xl px-2  font-bold"
          }
        >
          <span className="text-xl text-center px-2">
            <i class="fas fa-edit"></i>
          </span>
          design blog
        </h3>
      </div>
      <nav className=" flex item-center ">
        <ul className=" hidden md:flex items-center">
          <li className="px-4 capitalize text-lg px-4 font-light hover:font-normal ">
            <Link to="/">home</Link>
          </li>
          <li
            className="px-4 capitalize text-lg px-4 font-light hover:font-normal "
            onClick={handleClick}
          >
            categories <i className="fa-solid fa-chevron-down text-base"></i>
            {dropdown && <Dropdown />}
          </li>
          <li
            className="px-4 capitalize text-lg px-4 font-light hover:font-normal"
            onClick={() => setdropdown1(!dropdown1)}
          >
            blog <i className="fa-solid fa-chevron-down text-base"></i>
            {dropdown1 && <Dropdown2 />}
          </li>
          <li
            className="px-4 capitalize text-lg px-4 font-light hover:font-normal "
            onClick={() => setdropdown2(!dropdown2)}
          >
            more <i class="fa-solid fa-chevron-down text-base"></i>
            {dropdown2 && <Dropdown3 />}
          </li>
          <li className="px-4 capitalize text-lg px-4 font-light hover:font-normal ">
            <Link to="/contact">contact</Link>
          </li>
          {/* <li> <Link to="/login">login</Link></li> */}
          <span className="px-4 text-lg ">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </ul>
        {/* </div> */}
      </nav>
      <div className=" hidden  flex items-center md:flex  items-center  ">
       <button type="button" className="border border-solid border-[#4579A0] px-4 py-2 rounded-md capitalize text-md hover:bg-[#4579A0] hover:text-[#fff] "><Link to="/sign">sign up</Link></button>
       
        <Darkmode />
      </div>

      {/* hamburger on small screen */}
      {/* <div className=" flex items-center">
        <div className="hidden md: visible">
          <Darkmode />
        </div>
        <div
          className="md:hidden z-10  flex  flex-col items-center "
          onClick={setToggle}
        >
          {isMenuOpen ? (
            <span className="flex items-center ">
              <i className="fas fa-times text-white text-2xl"></i>
            </span>
          ) : (
            <i className="fas fa-bars text-2xl  "></i>
          )}
        </div>
        <div
          className={`${
            isMenuOpen
              ? "opacity-100 transform translate-x-0   "
              : "opacity-0  transform -translate-y-full  "
          }transition-transform absolute top-0 left-0  w-full h-screen bg-[#002130]/80 flex flex-col justify-center items-start text-white gap-6 `}
        >
          <nav className="">
            <ul className="flex   flex-col gap-6 ">
              <li className="px-4 capitalize text-xl  font-light hover:font-normal ">
                <Link to="/">home</Link>
              </li>
              <li
                className="px-4 capitalize text-xl font-light hover:font-normal "
                onClick={handleClick}
              >
                
                <i className="fa-solid fa-chevron-down text-base "></i>
                {dropdown && <Dropdown />}
              </li>
              <li
                className="px-4 capitalize text-xl  font-light hover:font-normal"
                onClick={() => setdropdown1(!dropdown1)}
              >
                blog <i className="fa-solid fa-chevron-down text-base"></i>
                {dropdown1 && <Dropdown2 />}
              </li>
              <li
                className="px-4 capitalize text-xl font-light hover:font-normal"
                onClick={() => setdropdown2(!dropdown2)}
              >
                more <i class="fa-solid fa-chevron-down text-base"></i>
                {dropdown2 && <Dropdown3 />}
              </li>
              <li className="px-4 capitalize text-xl  font-light hover:font-normal">
                <Link to="/contact">contact</Link>
              </li>
              <span className="px-4 text-xl ">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </ul>
          </nav>

          <div className="flex items-start">
            <div className="w-14 h-14 border-blue-400 border-2 border-solid rounded-full text-center mx-3"></div>

            <div className="capitalize ">
              <h3 className="text-xl font-bold ">dorcas ibrahim</h3>
              <p className="text-base font-normal">blog writer</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
