import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/header/header";

function Container() {
  let [email, setEmail] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState("");
  let navigate = useNavigate();
  let [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      recruiter: {
        email: email,
        company_name: companyName,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/recruiters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        const recruiterId = responseData.user.id;
        console.log(recruiterId);
        localStorage.setItem("recruiterId", recruiterId);
        handleNavigate();
      } else {
        const errorData = await response.json();
        setFormErrors(errorData.errors || []);
        console.log("Form submission error:", errorData);
      }
    } catch (error) {
      console.log("An error occurred while submitting the form:", error);
    }
  }

  function handleNavigate() {
    navigate("/recruiter");
  }

  return (
    <main id="finder" className="auth">
      <form onSubmit={handleSubmit}>
        <div className="auth-image"></div>
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
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
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

export default function PosterSignup() {
  return (
    <>
      <Header />
      <Container />
    </>
  );
}
