import axios from 'axios'
import React, { createContext, useReducer } from 'react'


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthContext =createContext()
const reducer =(state,action)=>{
  switch(action.type){
    case "LOGIN_SUCCESS":
      return{...state,isAuthenticated:action.payload,name:action.payload,isLoading:false,error:action.payload,token:action.payload.createToken}
    
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
    const response =await axios.post("http://localhost:4000/user/login",FORMDATA,{withCredentials:true})
    dispatch({type:"LOGIN_SUCCESS",payload:response.data})
    console.log(response.data)
    toast.success("user logged in")
    navigate("/")
 
    

  } catch (error) {
    
    //  if (error.response) {
    //   // The request was made and the server responded with a status code
    //   // that falls out of the range of 2xx
    //   console.log(error.response.data);
    
      
    //   toast.success(state.error)
    //   //  navigate("/login")
    // } 
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data.msg);
        dispatch({ type: 'LOGIN_ERROR', payload: error.response.data.msg});
        toast.error(state.error)
 
    } 

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
    logout



  }}>
    {children}

  </AuthContext.Provider>
  )
}

export { AuthProvider,AuthContext}
