import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <Navbar />
      <main className=' '>
        <Outlet />
      </main>
    </div>
  );
};

export default MainNav;
