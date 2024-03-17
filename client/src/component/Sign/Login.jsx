import React, { useContext, useReducer, useState } from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import { AuthContext } from "./Loginhandlers";


// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    // case "Set_NAME":
    //   return { ...state, name: action.payload };

    case "Set_email":
      return { ...state, email: action.payload };

    case "Set_password":
      return { ...state, password: action.payload };

    case "RESET":
      return action.initialState;
    default:
      return state;
  }
};
const Login = () => {
  
  const{Login,state}=useContext(AuthContext)
  const initialState = {
    // name: "",
    email: "",
    password: " ",
  };
  const [FORMDATA, dispatch] = useReducer(reducer, initialState);
const navigate =useNavigate()
  // handleChange for input
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `Set_${name}`, payload: value });
  };

  // input validation
  const [error, setError] = useState([]);

  const ValidateForm = () => {
    let valid = true;
    const newError = [];

    // if (!state.name.trim()) {
    //   newError.name = "Name is required";
    //   valid = false;
    // }
    if (!FORMDATA.email.trim()) {
      newError.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(FORMDATA.email)) {
      setError("Email is invalid");
      valid = false;
    }
    if (!FORMDATA.password.trim()) {
      newError.password = "Password is required";
      valid = false;
    } else if (FORMDATA.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
      valid = false;
    }

    setError(newError);
    return valid;
  };

  // onsubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ValidateForm()) {
      Login(FORMDATA)
      dispatch({ type: "RESET", initialState });
      navigate("/")
    
    }
  };
  return (
    <div className='p-24 font-["Poppins", sans-serif] w-full h-screen'>
      <div className="border border-solid  mx-auto shadow-lg p-6 sm:my-14 sm:py-10">
        <form
          action=""
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="my-6">
            {error.email && <div style={{ color: "red" }}>{error.email}</div>}
            <input
              type="email"
              name="email"
              id="email"
              value={FORMDATA.email}
              autoComplete="current-email"
              placeholder="email"
              className="border-2 border-solid border-[#4579A0] md:py-4 w-80  sm:py-6 shadow-md  focus:outline-none px-2 rounded-md capitalize  md:text-lg sm:text-xl"
              onChange={handleChange}
            />
          </div>
          <div className="my-6">
            {error.password && (
              <div style={{ color: "red" }}>{error.password}</div>
            )}
            <input
              type="password"
              name="password"
              id="password"
              value={FORMDATA.password}
              placeholder="password"
              autoComplete="current-password"
              className="border-2 border-solid border-[#4579A0] md:py-4 w-80  sm:py-6 shadow-md focus:outline-none px-2 rounded-md capitalize md:text-lg sm:text-xl"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-[#4579A0] capitalize w-36 md:py-2  sm:py-4 rounded-md text-white md:text-md sm:text-2xl mt-2"
          >
            sign in
          </button>
          <p className="md:text-sm sm:text-lg mt-2">
            Dont have an account ?{" "}
            <span className="text-[#4579A0] capitalize">
              <Link to="/sign">signup</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
