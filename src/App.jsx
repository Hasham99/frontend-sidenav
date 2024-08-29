import React from "react";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Layout from "./components/Layout.jsx/Layout";
import Home from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Layout /> */}
      {/* <Home /> */}
    </Routes>
  );
};

export default App;
