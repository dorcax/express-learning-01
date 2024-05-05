import React, { useReducer, useState ,useContext} from "react";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
import { DarkmodeContext } from "../context/themeContext";

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "Set_NAME":
      return { ...state, name: action.payload };

    case "Set_EMAIL":
      return { ...state, email: action.payload };

    case "Set_PASSWORD":
      return { ...state, password: action.payload };

    case "RESET":
      return action.initialState;
    default:
      return state;
  }
};
const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const{theme} =useContext(DarkmodeContext)
  // handleChange for input
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `Set_${name.toUpperCase()}`, payload: value });
  };

  // input validation
  const [error, setError] = useState([]);

  const ValidateForm = () => {
    let valid = true;
    const newError = [];

    if (!state.name.trim()) {
      newError.name = "Name is required";
      valid = false;
    }
    if (!state.email.trim()) {
      newError.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      setError("Email is invalid");
      valid = false;
    }
    if (!state.password.trim()) {
      newError.password = "Password is required";
      valid = false;
    } else if (state.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
      valid = false;
    }

    setError(newError);
    return valid;
  };
 
  const navigate =useNavigate()
  // onsubmit
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (ValidateForm()) {
      try {
        const response = await axios.post("https://blog-website-lbk2.onrender.com/user", {
          name: state.name,
          email: state.email,
          password: state.password,
        });
        console.log("user successfully registered", response);
        dispatch({ type: "RESET", initialState });
        navigate("/login")

      } catch (error) {
        console.log(error.response.data);
      }
    }
  };
  return (
    <div className='py-24 font-["Poppins", sans-serif] max-w-sm mx-auto h-screen   '>
      <div
          className={`${
            theme === "light"
              ? 'bg-white    py-4 font-["Poppins", sans-serif]'
              : 'bg-[#002130]     py-4 font-["Poppins", sans-serif] text-black '
          }  border border-solid shadow-lg p-6 `}>
      <form
        action=""
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="my-6 ">
          {error.name && <div style={{ color: "red" }}>{error.name}</div>}
          <input
            type="text"
            name="name"
            id=""
            value={state.name}
            placeholder="name"
            onChange={handleChange}
            className="border-2 border-solid border-[#4579A0] py-4 w-80 shadow-md focus:outline-none px-2 rounded-md  text-sm "
          />
        </div>
        <div className="my-6">
          {error.email && <div style={{ color: "red" }}>{error.email}</div>}
          <input
            type="email"
            name="email"
            id=""
            value={state.email}
            placeholder="email"
            className="border-2 border-solid border-[#4579A0] py-4  w-80 shadow-md focus:outline-none px-2 rounded-md  md:text-lg text-sm "
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
            id=""
            value={state.password}
            placeholder="password"
            className="border-2 border-solid border-[#4579A0] py-4 w-80  shadow-md focus:outline-none px-2 rounded-md  text-sm"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-[#4579A0] px-6 py-2  text-sm w-36 text-[#fff] capitalize rounded-md border border-solid mb-4 my-2 " >signup</button>
        <p    className={`${
        theme === "light"
          ? 'bg-white    py-4 font-["Poppins", sans-serif]'
          : 'bg-[#002130]     py-4 font-["Poppins", sans-serif] text-white '
      }   text-sm`}>Have an account ? <span className="text-[#4579A0] "><Link to="/login">Sign in</Link></span></p>
      </form>
      </div>
     
    </div>
  );
};

export default SignUp;
