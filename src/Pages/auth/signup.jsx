import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../Components/header/header";

function Container() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      seeker: {
        email,
        username,
        password,
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
        const responseData = await response.json();
        const seekerId = responseData.id;
        console.log("Form submitted successfully. Seeker ID:", seekerId);
        localStorage.setItem("seekerId", seekerId);
        handleNavigate();
      } else {
        const errorData = await response.json();
        setFormErrors(errorData.errors || []);
        console.log("Form submission error:", errorData);
      }
    } catch (error) {
      console.log("An error occurred while submitting the form:", error);
    }
  };

  const handleNavigate = () => {
    navigate("/seeker/signup");
  };

  return (
    <main id="finder" className="auth">
      <form onSubmit={handleSubmit}>
        <div className="auth-image"></div>
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
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="auth-form-input">
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="auth-form-input">
            <p>Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </label>

          <button type="submit" className="auth-form-button">
            Join Insunity
          </button>

          <div id="auth-form-errors">
            {formErrors.map((error, index) => (
              <p className="auth-form-error" key={index}>
                {error}
              </p>
            ))}
          </div>
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
