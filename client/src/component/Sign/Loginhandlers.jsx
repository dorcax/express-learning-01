import axios from 'axios'
import React, { createContext, useReducer } from 'react'


const AuthContext =createContext()
const reducer =(state,action)=>{
  switch(action.type){
    case "LOGIN_SUCCESS":
      return{...state,isAuthenticated:action.payload,name:action.payload,isLoading:false,error:null,token:action.payload.createToken}
    
    case "LOGOUT":
      return {...state,isAuthenticated:false,name:"",isLoading:false,error:null}
    case 'LOGIN_ERROR':
        return {
          ...state,
          isloading: false,
          error: action.payload,
        };
    default:
      return state
  }
}
const AuthProvider = ({children}) => {
  const initialState={
    isAuthenticated:false,
    name:"",
    isLoading:false,
    error:null
  }
  const[state,dispatch] =useReducer(reducer,initialState)
const Login =async(FORMDATA)=>{
  try {
    const response =await axios.post("http://localhost:4000/user/login",FORMDATA)
    dispatch({type:"LOGIN_SUCCESS",payload:response.data})
    

  } catch (error) {
     dispatch({ type: 'LOGIN_ERROR', payload: error.message });
  }

}

const logout = () => {
  dispatch({ type: 'LOGOUT' });
};
  return (
  <AuthContext.Provider value={{
    state,
    isAuthenticated:state.isAuthenticated,
    Login,
    LoadUser,
    logout



  }}>
    {children}

  </AuthContext.Provider>
  )
}

export { AuthProvider,AuthContext}
