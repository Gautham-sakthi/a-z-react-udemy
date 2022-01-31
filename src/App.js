import React from "react";
import "./App.css";
import Homepage from "./Pages/E-commerce/Homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/E-commerce/ShopPage";
import Header from "./Components/header/Header";
import NotFound from "./Pages/E-commerce/NotFound";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
