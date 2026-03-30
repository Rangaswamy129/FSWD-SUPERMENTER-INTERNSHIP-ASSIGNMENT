import React, { useState } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!password.match(passwordPattern)) {
      setPasswordError(
        "Password must contain 8 characters, uppercase, lowercase and number"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmError("Passwords do not match");
      valid = false;
    } else {
      setConfirmError("");
    }

    if (valid) {
      alert("Signup Successful!");
    }
  };

  return (
    <div className="container">

      <div className="signup-card">

        <h2>Smart Signup</h2>
        <p>Create your account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error">{emailError}</span>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{passwordError}</span>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="error">{confirmError}</span>

          <button type="submit">Create Account</button>

        </form>

      </div>

    </div>
  );
}

export default App;