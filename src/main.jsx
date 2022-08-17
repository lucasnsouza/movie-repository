import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Details from "./pages/Details";
import Home from "./pages/Home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/movie-repository/" element={<Home />}></Route>
      <Route path="/movie-repository/details/:id" element={<Details />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
