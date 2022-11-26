import { Redirect, Route, Routes, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Home";
import Bot from "./Bot";
import Chatbot2 from "./Chatbot2";
import Header from "./Header";

const Routers = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" exact="true" element={<Home />} />
        <Route path="/chatbot" exact="true" element={<Chatbot2 />} />
        <Route path="/bot" exact="true" element={<Bot />} />
      </Routes>
    </div>
  );
};

export default Routers;
