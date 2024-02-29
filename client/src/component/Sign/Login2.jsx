import React, { useReducer } from "react";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
  loading: false,
  error: null,
  success: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_SUCCESS":
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};

function LoginForm() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email: state.email,
        password: state.password,
      });

      dispatch({ type: "SET_SUCCESS", payload: "Login successful!" });
    } catch (error) {
      if (error.response) {
        dispatch({ type: "SET_ERROR", payload: error.response.data.message });
      } else if (error.request) {
        dispatch({ type: "SET_ERROR", payload: "No response from server" });
      } else {
        dispatch({ type: "SET_ERROR", payload: "An error occurred" });
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={state.email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={state.password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={state.loading}
            >
              {state.loading ? "Loading..." : "Sign In"}
            </button>
          </div>
        </form>
        {state.error && (
          <p className="mt-2 text-center text-sm text-red-600">{state.error}</p>
        )}
        {state.success && (
          <p className="mt-2 text-center text-sm text-green-600">{state.success}</p>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
