import React ,{useContext}from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { DarkmodeContext } from "../context/themeContext";

const MainNav = () => {
  const { theme, toggleTheme } = useContext(DarkmodeContext);
  return (
    <div className={`${
      theme === "light"
        ? 'bg-white    py-4 font-["Poppins", sans-serif]'
        : 'bg-[#002130]     py-4 font-["Poppins", sans-serif] text-white '
    }   `}>
      <Navbar />
      <main className=' '>
        <Outlet />
      </main>
    </div>
  );
};

export default MainNav;
