import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
  };
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  };
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  async function signInWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
  }

  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div>
      <div className="header">
        <div>
          <img className="dark" src="dark.svg"></img>
        </div>
        <div className="logo">Myriadflow</div>
      </div>
      <div className="row">
        <div className="col-6 form-widget text-center mt-5">
          <h1>Sign In</h1>
          <div>CONTINUE WITH</div>
          <div className="mt-5 social-icon-wrapper">
            <div
              style={{
                borderRadius: "50%",
                padding: "10px",
                background: "black",
              }}
            >
              <img
                src="google.png"
                onClick={signInWithGoogle}
                style={{ width: "20px" }}
              ></img>
            </div>

            <div
              style={{
                borderRadius: "50%",
                padding: "10px",
                background: "black",
              }}
            >
              <img
                src="facebook.png"
                onClick={signInWithFacebook}
                style={{ width: "20px" }}
              ></img>
            </div>
            <div
              style={{
                borderRadius: "50%",
                padding: "10px",
                background: "black",
              }}
            >
              <img
                src="tweeter.png"
                onClick={signInWithFacebook}
                style={{ width: "20px" }}
              ></img>
            </div>
            <div
              style={{
                borderRadius: "50%",
                padding: "10px",
                background: "black",
              }}
            >
              <img
                src="discord.png"
                onClick={signInWithDiscord}
                style={{ width: "20px" }}
              ></img>
            </div>
          </div>

          <hr className="divider"></hr>

          <div className="mt-5">EMAIL</div>
          <div>
            <input
              className="email-input"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="pass-input"
              placeholder="password"
            ></input>
          </div>
          <div className="mt-5">
            <button
              className="continue-button"
              disabled={loading}
              onClick={signup}
            >
              <span>{loading ? "Loading" : "Continue with Email"}</span>
            </button>
          </div>
          <div className="mt-5">
            <button
              className="continue-button"
              disabled={loading}
              onClick={login}
            >
              <span>{loading ? "Loading" : "continue with login"}</span>
            </button>
          </div>

          <div className="forgot">
            Forgot password ?<Link to="/resetpasslink">Reset now</Link>
          </div>
          <div className="forgot">
            You dont have an account ?<Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
