import React, { useContext } from "react";
import { DarkmodeContext } from "./themeContext";

const Darkmode = () => {
  const { theme, toggleTheme } = useContext(DarkmodeContext);

  return (
    <div>
      <div className=" md: px-4" onClick={toggleTheme}>
        <span className="flex justify-center items-center   text-xl">
          {theme === "light" ? (
            <i class="fa-solid fa-moon "></i>
          ) : (
            <i class="fa-solid fa-sun"></i>
          )}
        </span>
      </div>
    </div>
  );
};

export default Darkmode;
