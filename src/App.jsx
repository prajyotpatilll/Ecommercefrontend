import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import Shopcategory from "./Pages/Shopcategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LginSignup";
import Footer from "./Components/Footer/Footer";
import mens_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<Shopcategory banner={mens_banner} cate={'men'} category="mens"/>}/>
          <Route path="/womens" element={<Shopcategory banner={women_banner} cate={'women'} category="womens"/>}/>
          <Route path="/kids" element={<Shopcategory banner={kid_banner} cate={'kid'} category="kids"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="./cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
