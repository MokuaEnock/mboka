import "./auth.css";

import React, { useState } from "react";

export default function FinderSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      email,
      password,
      firstName,
      lastName,
      passwordConfirmation,
    });
    // add your API call to submit the form data here
  };
  return (
    <main id="finder" className="auth">
      <form onSubmit={handleSubmit}>
        <div>This is the image</div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </main>
  );
}
