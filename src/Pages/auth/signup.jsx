import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinderSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formData = {
    //   email: email,
    //   username: username,
    //   password: password,
    //   password_confirmation: passwordConfirmation,
    // };

    const formData = {
      seekers: {
        email: email,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/seekers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        handleNavigate();
      } else {
        const errorData = await response.json();
        console.log("Form submission error:", errorData);
      }
    } catch (error) {
      console.log("An error occurred while submitting the form:", error);
    }
  };

  function handleNavigate() {
    navigate("/seeker");
  }

  return (
    <main id="finder" className="auth">
      <form onSubmit={handleSubmit}>
        <div>This is the image</div>
        <div>
          <h3>Hello there, Job Seeker, welcome to Insunity</h3>
          <p>Sign up today to mass apply to jobs that fit your skills.</p>
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

          <label className="auth-form-input">
            <p>Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </label>

          <button type="submit" className="auth-form-button">
            Join Insunity
          </button>
        </div>
      </form>
    </main>
  );
}
