import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../Components/header/header";

function Container() {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    handleNavigate();
  }

  function handleNavigate() {
    navigate("/seeker/signup");
  }
  return (
    <main id="finder" className="auth">
      <form onSubmit={handleSubmit}>
        <div>This is the image</div>
        <div>
          <h3>Hello there Friend, welcome to Insunity</h3>
          <p>Sign up today to mass apply to jobs that fit your skills.</p>
          <label className="auth-form-input">
            <p>Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="auth-form-input">
            <p>Username</p>
            <input type="text" placeholder="Username" />
          </label>

          <label className="auth-form-input">
            <p>Password</p>
            <input type="password" placeholder="Password" />
          </label>

          <label className="auth-form-input">
            <p>Confirm Password</p>
            <input type="password" placeholder="Confirm Password" />
          </label>

          <button type="submit" className="auth-form-button">
            Join Insunity
          </button>

          <div id="auth-form-errors">{/* Form errors rendering */}</div>
        </div>
      </form>
    </main>
  );
}

export default function FinderSignup() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}
