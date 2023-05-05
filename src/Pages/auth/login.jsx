import "./auth.css";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main id="login" className="auth">
      <form onSubmit={handleSubmit}>
        <div>This is the image</div>
        <div>
          <h2>Welcome back</h2>
          <p>Login to continue on your journey</p>
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
          <button type="submit">Log In</button>
        </div>
      </form>
    </main>
  );
}
