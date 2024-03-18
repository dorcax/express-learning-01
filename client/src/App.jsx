import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "./component/navbar/themeContext";
import { AuthProvider } from "./component/Sign/Loginhandlers";
import Body from "./component/body/Body";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import MainNav from "./component/navbar/MainNav";
import Lifestyle from "./component/category/Lifestyle";
import Culture from "./component/category/Culture";
import Startup from "./component/category/Startup";
import Featured from "./component/blog/Featured";
import Single from "./component/blog/Single";
import Video from "./component/blog/Video";
import Author from "./component/more/Author";
import SearchResult from "./component/more/SearchResult";
import Error from "./component/more/Error";
import SignUp from "./component/Sign/SignUp";
import Login from "./component/Sign/Login";
import { Contact } from "./component/contact/Contact";
import Comment from "./component/blog/comment";
import ProtectedRoutes from "./component/ProtectedRoutes";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainNav />}>
         <Route path="sign" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        {/* <Route element={<ProtectedRoutes/>}> */}
        <Route index element={<Body />} />
       
        <Route path="category/lifestyle" element={<Lifestyle />} />
        <Route path="category/culture" element={<Culture />} />
        <Route path="category/IT" element={<Startup />} />
        <Route path="blog/featured" element={<Featured />} />
        <Route path="blog/single/:blogId" element={<Single />} />
        <Route path="blog/video" element={<Video />} />
        <Route path="more/author" element={<Author />} />
        <Route path="more/searchResult" element={<SearchResult />} />
        <Route path="blog/lifestyle" element={<Lifestyle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:blogId/comment" element={<Comment />} />
        <Route path="*" element={<Error />} />
        </Route>
      // </Route>
    )
  );
  return (
    <div>
      <AuthProvider>
        <ThemeContext>
          <RouterProvider router={router} />
          <ToastContainer></ToastContainer>
        </ThemeContext>
      </AuthProvider>
    </div>
  );
};

export default App;
