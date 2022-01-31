import React from "react";
import "./App.css";
import Homepage from "./Pages/E-commerce/Homepage";
import { Routes, Route, Link } from "react-router-dom";
import ShopPage from "./Pages/E-commerce/ShopPage";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop page</Link>
      </nav>
      <Routes>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
