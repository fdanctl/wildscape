import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
import Wildlife from "./pages/Wildlife";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/login" element={<Dashboard />}/> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employee" element={<Login2 />} />
      <Route path="/admin" element={<Login2 />} />
      <Route path="/wildlife" element={<Wildlife />} />
      {/* <Route path="/animalCareLog" element={<AnimalCareLog />} /> */}
      {/* <Route path="/myAccount" element={<MyAccount />} /> */}
      {/* <Route path="/resources" element={<Resources />} /> */}
    </Routes>
  </BrowserRouter>
);
