import React, { useState } from "react";
import { more } from "../../../data/category";
import { Link } from "react-router-dom";
const Dropdown3 = () => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <div className="relative">
      <ul
        className={
          dropdown
            ? 'bg-white shadow-md w-48  border border-solid border-slate-300  font-["Poppins", sans-serif] hidden  absolute top-3.5'
            : 'bg-white shadow-md w-48  border border-solid border-slate-300  font-["Poppins", sans-serif] absolute top-3.5 '
        }
        onClick={() => setdropdown(!dropdown)}
      >
        {more.map((er, index) => {
          return (
            <li
              key={index}
              className="text-slate-500 text-lg font-normal capitalize py-2 block"
              onClick={() => setdropdown(dropdown)}
            >
              <Link to={er.path}>{er.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown3;
