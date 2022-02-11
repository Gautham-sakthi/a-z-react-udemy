import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Pages/E-commerce/Homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/E-commerce/ShopPage";
import Header from "./Components/header/Header";
import NotFound from "./Pages/E-commerce/NotFound";
import Contact from "./Pages/E-commerce/Contact";
import SignInRegister from "./Components/sign-in-sign-up/SignInRegister";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser);
      console.log(currentUser.displayName);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="signin" element={<SignInRegister />}></Route>
        <Route path="shop" element={<ShopPage />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
