/*!
=========================================================
* Event Organization Web Design System React - v1
=========================================================
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./views/Index.js";
import Contact from "./views/examples/Contact.js";
import Register from "./views/examples/Register.js";
import Admin from "views/examples/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/cr@admin" exact element={<Admin />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
