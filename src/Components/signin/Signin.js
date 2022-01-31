import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import Forminput from "../form-input/Forminput";
import "./Signin.styles.scss";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className="sign-in">
      <h2>I Already have account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <Forminput
          name="email"
          type="email"
          placeholder="email"
          value={email}
          label="email"
          handleChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <Forminput
          name="password"
          type="password"
          placeholder="password"
          value={password}
          label="password"
          handleChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton type="submit">Login</CustomButton>
      </form>
    </div>
  );
}

export default Signin;
