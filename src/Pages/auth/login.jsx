import Header from "../../Components/header/header";
import "./auth.css";

import { useState } from "react";

function Container() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [formErrors, setFormErrors] = useState([]);
  // let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main id="login" className="auth">
      <form onSubmit={handleSubmit}>
        <div>This is the image</div>
        <div>
          <h3>Hello there, Job Seeker, welcome back</h3>
          <p>Continue from where you left off.</p>
          <label className="auth-form-input">
            <p>Email Address</p>
            <input
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label className="auth-form-input">
            <p>Username</p>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>

          <label className="auth-form-input">
            <p>Password</p>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button type="submit" className="auth-form-button">
            Continue to Insunity
          </button>

          {/* <div id="auth-form-errors">
            {formErrors.map((error, index) => (
              <p className="auth-form-error" key={index}>
                {error}
              </p>
            ))}
          </div> */}
        </div>
      </form>
    </main>
  );
}

export default function Login() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}
