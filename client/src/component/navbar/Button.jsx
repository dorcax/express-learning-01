import React, { useContext } from "react"
import {Link,Outlet} from "react-router-dom"
import { DarkmodeContext } from "./themeContext"

const Button =()=>{
  const{theme,setToggle}=useContext(DarkmodeContext)
    return(
        <div className='font-["Poppins", sans-serif] '>
          <button type="button" className={theme ==="light"?"bg-black border-2 rounded-md border-solid border-[#52ab98] w-20  p-2 capitalize hover:bg-[#52ab98] text-white ":"bg-black border-2 rounded-md border-solid border-[#52ab98] w-20  p-2 capitalize hover:bg-[#52ab98] text-white "}>
        <Link to="/sign">
            sign in
        </Link>
          </button>
        
        </div>

        
    )
}

export default Button