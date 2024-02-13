import React,{useState} from "react";
import { category, blog, more } from "../../../data/category";
const Dropdown = () => {
  const [dropdown,setdropdown]=useState(false)
  const handleClick =() =>{
    setdropdown(!dropdown)

  }
  const handleclicks =()=>{
    setdropdown(false)
  }
  return (
    <div className='relative'>
      <ul className={dropdown ? 'bg-white shadow-md w-48  text-left  capitalize top-3.5  border border-slate-300 border-solid  font-["Poppins", sans-serif]  absolute hidden' :'bg-white shadow-md w-44  text-left  capitalize  border border-slate-300 border-solid  font-["Poppins", sans-serif]  absolute top-3.5'} onClick={handleClick}>
        {category.map((er, index) => {
         return <li key={index} className="py-2 font-normal text-lg text-slate-500 block" onClick={handleclicks}>{er}</li>;
        })}
      </ul>
    </div>
  );
};



export default Dropdown;
