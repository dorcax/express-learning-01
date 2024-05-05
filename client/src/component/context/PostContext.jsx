import React, { createContext, useReducer } from 'react'

const PostContext =createContext()
// switch for reducer function
const reducer =(state,action)=>{

  switch(action.type){

    case "get_post":
      return{
        // ...state,
        content:action.payload
      }
    case "create_post":
      return{
        ...state,
        content:[action.payload,...(state.content||[])]
      }
    
      default:
        return state
    
  }
}
const PostContextProvider = ({children}) => {
  const initialState ={
    content:null
  }
const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <PostContext.Provider value={{...state,dispatch}}>
      {children}
    </PostContext.Provider>
  )
}

export  {PostContextProvider,PostContext}