import React from "react";
import Signin from "../signin/Signin";
import "./SignInRegister.styles.scss";
function SignInRegister() {
  return (
    <div className="sing-in-and-sign-up">
      Sign in
      <Signin />
    </div>
  );
}

export default SignInRegister;
