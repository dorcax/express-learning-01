import React, { createContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // localStorage.setItem("token",payload.action.)
      return { ...state, IsAuthenticated: true, name: action.payload ,loading:false,error:null};
    case "USERLOADED":
      return{...state,IsAuthenticated:true,name:null,loading:false,error:null
      }
    case "LOGIN_FAIL":
      case "RESET":
        return action.initialState;
    case "LOGOUT":
      // localStorage.removeItem("token")
      return {
        ...state,
        IsAuthenticated: false,
        name: null,
        loading:false,
        error:action.payload

      };
    default:
      return state;
  }
};
const AuthProvider = ({ children }) => {
  const initialState = {
    IsAuthenticated: false,
    user: null,
    loading:false,
    error:null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const LoadUser =async()=>{
    try {
      const response =await axios.get("http://localhost:4000/user",{withCredentials:true})
      dispatch({type:"USERLOADED",payload:response.data})
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.response.data.msg })
    }

  }

  const login = async (FORMDATA) => {
    try {
      const res = await axios.post("http://localhost:4000/user/login",FORMDATA,{withCredentials:true})
      dispatch({ type: "LOGIN", payload: res.data });
      // LoadUser()      
      // dispatch({ type: "RESET", initialState });
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL" ,payload:error});
    }
  };
  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  // const handleLogout = async () => {
  //   try {
  //     await axios.post('http://localhost:3001/logout');
  //     dispatch({ type: 'LOGOUT' });
  //   } catch (error) {
  //     console.error('Logout error:', error);
  //   }
  // };
  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        name: state.name,
        IsAuthenticated: state.IsAuthenticated,
        LoadUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider,AuthContext}
