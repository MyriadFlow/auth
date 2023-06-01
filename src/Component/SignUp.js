import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <div className="header">
        <div>
          <img className="dark" src="dark.svg"></img>
        </div>
        <div className="logo">Myriadflow</div>
      </div>
      <div className="signup-wrapper">
        <div className="sign-up">Sign Up</div>
        <div className="user-label">USERNAME</div>

        <div>
          <input type="text" className="username" />
        </div>
        <div className="pass-label">PASSWORD</div>

        <div>
          <input type="text" className="username" />
        </div>
        <div className="pass-label">EMAIL</div>

        <div>
          <input type="text" className="username" placeholder="Email" />
        </div>
        <div className="check-wrapper">
          <div>
            <input type="checkbox" />
          </div>
          <div>I agree to the terms and conditions</div>
        </div>
        <div className="create-account">Create Account</div>
        <div style={{ marginTop: "20px" }}>Or</div>
        <div style={{ marginTop: "15px" }} className="sign-in-with">
          <Link to="/">Sign in with your account</Link>
        </div>
      </div>
    </div>
  );
}
