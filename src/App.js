import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-sans">

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
