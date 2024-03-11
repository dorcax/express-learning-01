import React, { useContext, useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import Dropdown2 from "./dropdown/Dropdown2";
import { category, blog, more } from "../../data/category";
import Dropdown3 from "./dropdown/Dropdown3";
import Darkmode from "./darkmode";
import { DarkmodeContext } from "./themeContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../Sign/Loginhandlers";
import ModalSearch from "./ModalSearch";

const Navbar = () => {
  const { login, logout,isAuthenticated} = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(DarkmodeContext);
  const [dropdown, setdropdown] = useState(false);
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const[openModal,setCloseModal] =useState(false)
  const handleClick = () => {
    setdropdown(!dropdown);
  };

  // hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // modal togggle
  const handleToggleModal =()=>{
    setCloseModal(!openModal)

  }
  return (
    <div
      className={`${
        theme === "light"
          ? 'bg-white   shadow-lg py-4 font-["Poppins", sans-serif]'
          : 'bg-[#002130]    shadow-lg py-4 font-["Poppins", sans-serif] text-white '
      }  flex  items-center px-20  justify-between w-full md:flex `}
    >
      <div className="flex items-center justify-center">
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
      <nav className=" flex  item-center  ">
        <ul className="hidden md:flex md:-center">
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
          <span className="px-4 text-lg " onClick={handleToggleModal}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
              
              
              
         {openModal && <ModalSearch closeMenu ={handleToggleModal}/> }
        </ul>

       
      </nav>
      <div className=" hidden md:flex md:items-center md:flex  md:items-center  ">
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="border border-solid border-[#4579A0] px-4 py-2 rounded-md capitalize text-md hover:bg-[#4579A0] hover:text-[#fff] transition ease-out duration-500  "
          >
            logout
          </button>
        ) : (
          <button
            type="button"
            className="border border-solid border-[#4579A0] px-4 py-2 rounded-md capitalize text-md hover:bg-[#4579A0] hover:text-[#fff] transition ease-out duration-500  "
          >
            <Link to="/login">signin</Link>
          </button>
        )}

        <Darkmode />
      </div>
    
      
      
      
      {/* hamburger on small screen  */}
      
        <div className="md:hidden">
          <button onClick={setToggle} className="">{isMenuOpen?<i class="fas fa-times"></i>:<i class="fas fa-bars"></i>}</button>
        </div>
        <nav className= {isMenuOpen?"fixed left-0 top-0 w-[40%] h-screen bg-[#000] text-white ease-in-out duration-500  text-center cursor-pointer" :"fixed left-[-100%]"}>
        <ul className=" pt-10">
          <li className="px-4 capitalize text-lg  py-5 font-light hover:font-normal ">
            <Link to="/">home</Link>
          </li>
          <li
            className="px-4 capitalize text-lg py-5 font-light hover:font-normal "
            onClick={handleClick}
          >
            categories <i className="fa-solid fa-chevron-down text-base"></i>
            {dropdown && <Dropdown />}
          </li>
          <li
            className="px-4 capitalize text-lg py-5 font-light hover:font-normal"
            onClick={() => setdropdown1(!dropdown1)}
          >
            blog <i className="fa-solid fa-chevron-down text-base"></i>
            {dropdown1 && <Dropdown2 />}
          </li>
          <li
            className="px-4 capitalize text-lg py-5 font-light hover:font-normal "
            onClick={() => setdropdown2(!dropdown2)}
          >
            more <i class="fa-solid fa-chevron-down text-base"></i>
            {dropdown2 && <Dropdown3 />}
          </li>
          <li className="px-4 capitalize text-lg py-5 font-light hover:font-normal ">
            <Link to="/contact">contact</Link>
          </li>
          {/* <li> <Link to="/login">login</Link></li> */}
          <span className="px-4 text-lg py-5 " onClick={handleToggleModal}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
              
              
              
         {openModal && <ModalSearch closeMenu ={handleToggleModal}/> }
        </ul>
        <div className="flex flex-col items-center  py-5 md:flex  items-center ">
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="border border-solid border-[#4579A0] px-4 py-2 rounded-md capitalize text-md hover:bg-[#4579A0] hover:text-[#fff] transition ease-out duration-500  "
          >
            logout
          </button>
        ) : (
          <button
            type="button"
            className="border border-solid border-[#4579A0] px-4 py-2 rounded-md capitalize text-md hover:bg-[#4579A0] hover:text-[#fff] transition ease-out duration-500  "
          >
            <Link to="/login">signin</Link>
          </button>
        )}

     <div className="py-5">   <Darkmode /></div>
      </div>
       
      </nav>
    
    </div>
  );
};

export default Navbar;
