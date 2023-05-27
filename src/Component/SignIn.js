import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
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
          <div className="mt-5">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email);
              }}
              className="continue-button"
              disabled={loading}
            >
              <span>{loading ? "Loading" : "Continue with Email"}</span>
            </button>
          </div>

          <div className="forgot">
            Forgot password ?
            <a href="" className="active">
              Reset now
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
