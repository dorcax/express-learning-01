import React from "react";
import Navbar from "./component/navbar/Navbar";
import { ThemeContext } from "./component/navbar/themeContext";
import Body from "./component/body/Body";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    
      <Route path="/" element={<MainNav/>}>
        <Route index element={<Body />} />
        <Route path="sign" element={<SignUp />} />
        <Route path="category/lifestyle" element={<Lifestyle/>}/>    
        <Route path="category/culture" element={<Culture/>}/>
        <Route path="category/startup" element={<Startup/>}/>
        <Route path="blog/featured" element={<Featured/>}/>
        <Route path="blog/single" element={<Single/>}/>
        <Route path="blog/video" element={<Video/>}/>
        <Route path="more/author" element={<Author/>}/>
        <Route path="more/searchResult" element={<SearchResult/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="blog/lifestyle" element={<Lifestyle/>}/>

         
      </Route>
  
    )
  );
  return (
    <div>
    
      <ThemeContext>
      
        <RouterProvider router={router} />
      </ThemeContext>

      
    </div>
    
  );
};

export default App;
