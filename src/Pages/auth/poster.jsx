import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/header/header";

function Container() {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
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
          <h3>Welcome to your talent Hub</h3>
          <p>Join Insunity to find the right talent.</p>
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
            <p>Company Name</p>
            <input type="text" placeholder="Company Name" />
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

export default function PosterSignup() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}
