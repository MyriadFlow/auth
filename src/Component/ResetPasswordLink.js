import React from "react";
import { Link } from "react-router-dom";
export default function ResetPasswordLink() {
  return (
    <div>
      <div className="header">
        <div>
          <img className="dark" src="dark.svg"></img>
        </div>
        <div className="logo">Myriadflow</div>
      </div>
      <div className="reset-password-wrapper">
        <div className="reset-pass-text">Reset your password</div>
        <div className="enter-your-email-text">
          <div>Enter your email address and we’ll send you a link </div>
          <div className="to-reset">to reset password</div>
        </div>
        <div>
          <input
            type="email"
            className="reset-email-input"
            placeholder="Email"
          ></input>
        </div>
        <div>
          <button className="send-link">Send Link</button>
        </div>
        <div className="or">Or</div>
        <div className="back-to">
          Back to 
          <Link  to="/signup">
              Sign In
            </Link>{" "}
        </div>
      </div>
    </div>
  );
}
