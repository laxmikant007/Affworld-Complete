import React from "react";
import "./styles.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main"
import Login from "./components/Login";
import Signup from "./components/Signup";

// PAGES
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import Advertisers from "./pages/Advertisers";
import Offers from "./pages/Offers";
import Advitisors from "./pages/Advitisors";
import ErrorPage from "./pages/ErrorPage";
import {PrivateComponent, PrivateLoginSign} from "./components/PrivateComponent";
import Retest from "./pages/Retest";


function App() {
  const user = localStorage.getItem("token");
  return (

    <>

      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
        <Route element={<PrivateLoginSign/>}>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Retest />} />

        </Route>

          

          <Route element={<PrivateComponent />} >

            <Route path="/" exact element={<Home />} />
            {/* <Route path="/signup" element={<Signup/>} /> */}

            <Route path="/register" element={<Register />} />
            <Route path="/advertisers" element={<Advertisers />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/advitisors" element={<Advitisors />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;