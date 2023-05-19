import "./auth.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinderSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  let navigate = useNavigate();

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

  function handleNavigate() {
    navigate("/seeker");
  }

  return (
    <main id="finder" className="auth">
      <form onSubmit={handleSubmit}>
        <div>This is the image</div>
        <div>
          <h3>Hello there Job Seeker</h3>
          <p>Find and do what you love.</p>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              // required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              // required
            />
          </label>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              // required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              // required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
              // required
            />
          </label>
          <button type="submit" onClick={handleNavigate}>
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
}
