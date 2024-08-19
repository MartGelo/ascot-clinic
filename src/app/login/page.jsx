"use client";
import React, { useEffect, useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    // Prevent scroll when on login/signup page
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scroll when leaving the login/signup page
      document.body.style.overflow = "";
    };
  }, []);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-signup-container">
      <div className="card-wrapper">
        <div className={`card ${isSignUp ? "sign-up" : "log-in"}`}>
          <div className="card-front">
            <div className="form-container">
              <h4>Log In</h4>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-style"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-style"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn">
                  Log In
                </button>
                <p className="link" onClick={handleToggle}>
                  Don't have an account? Sign Up
                </p>
              </form>
            </div>
          </div>
          <div className="card-back">
            <div className="form-container">
              <h4>Sign Up</h4>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-style"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-style"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-style"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn">
                  Sign Up
                </button>
                <p className="link" onClick={handleToggle}>
                  Already have an account? Log In
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
