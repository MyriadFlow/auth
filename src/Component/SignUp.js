import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
  };
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

        <div className="pass-label">PASSWORD</div>

        <div>
          <input value={password}
              onChange={(e) => setPassword(e.target.value)} type="text" className="username" placeholder="password" />
        </div>
        <div className="pass-label">EMAIL</div>

        <div>
          <input  value={email}
              onChange={(e) => setEmail(e.target.value)} type="text" className="username" placeholder="Email" />
        </div>
        <div className="check-wrapper">
          <div>
            <input type="checkbox" />
          </div>
          <div>I agree to the terms and conditions</div>
        </div>
        <div  >
          <button className="create-account" onClick={signup}>Create Account</button>
          </div>
        <div style={{ marginTop: "20px" }}>Or</div>
        <div style={{ marginTop: "15px" }} className="sign-in-with">
          <Link to="/">Sign in with your account</Link>
        </div>
      </div>
    </div>
  );
}
