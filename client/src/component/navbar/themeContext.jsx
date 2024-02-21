import React, { createContext, useState } from 'react'
const DarkmodeContext =createContext(null)

const ThemeContext = ({children}) => {
    const[theme,setTheme] = useState("light")
    const toggleTheme =()=>{
        setTheme((prev) =>(prev ==="light"?"dark":"light"))
        
    }
  return (
<DarkmodeContext.Provider value={{theme,toggleTheme}}>

<div>{children}</div>
</DarkmodeContext.Provider>

    
  )
}

export {ThemeContext,DarkmodeContext}