import axios from 'axios'
import React, { createContext, useReducer } from 'react'


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthContext =createContext()
const reducer =(state,action)=>{
  switch(action.type){
    case "USERLOADED":
      return{...state,isAuthenticated:true,currentUser:action.payload,isLoading:false,error:action.payload}
    case "LOGIN_SUCCESS":
      return{...state,isAuthenticated:true,currentUser:action.payload,isLoading:false,error:action.payload}
    
    case "LOGOUT":
      return {...state,isAuthenticated:false,isLoading:false,error:null,currentUser:null}
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
    currentUser:null,
    isLoading:false,
    error:null
  }
  const[state,dispatch] =useReducer(reducer,initialState)
// user endpoint
const UserLoad =async()=>{
  try {
    const response =await axios.get("https://blog-website-lbk2.onrender.com/user",{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
      }
    })
    const user =response.data

    dispatch({type:"USERLOADED",payload:user})
    localStorage.setItem("user",JSON.stringify(user))
   
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: error.response.data.msg});
    toast.error(state.error)
  }
}



const Login =async(FORMDATA)=>{
  try {
    const response =await axios.post("https://blog-website-lbk2.onrender.com/user/login",FORMDATA)
    dispatch({type:"LOGIN_SUCCESS",payload:response.data})
    UserLoad()
    localStorage.setItem("token",response.data.token)
    toast.success("user logged in")
    navigate("/login")
  } catch (error) {
   
    if (error.response) {
      console.log(error.response.data.msg);
        dispatch({ type: 'LOGIN_ERROR', payload: error.response.data.msg});
        toast.error(state.error)
 
    } 

  }

}



const logout = () => {
  localStorage.removeItem("token")
  dispatch({ type: 'LOGOUT' });
  toast.success("user logged out")
};
  return (
  <AuthContext.Provider value={{
    state,
    isAuthenticated:state.isAuthenticated,
    currentUser:state.currentUser,
    Login,
    logout,
    UserLoad



  }}>
    {children}

  </AuthContext.Provider>
  )
}

export { AuthProvider,AuthContext}
