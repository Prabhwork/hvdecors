import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import ProductInventory from "../pages/ProductInventory";
import Background from "../components/UI/Background";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/background" element={<Background />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/product-inventory" element={<ProductInventory />} />
    </Routes>
  );
};

export default Routers;
