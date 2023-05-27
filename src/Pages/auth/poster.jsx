import "./auth.css";
import { useState } from "react";
import Header from "../../Components/header/header";

export default function PosterSignup() {
  let [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(companyName);
  }

  function Container() {
    return (
      <main id="poster" className="auth">
        <form onSubmit={handleSubmit}>
          <div>This is the image</div>
          <div>
            <h3>Hello there Recruiter</h3>
            <p>Find the right talent</p>
            <label>
              <p>Company name</p>
              <input
                type="text"
                placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>

            <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </main>
    );
  }

  return (
    <>
      <Header />
      <Container />
    </>
  );
}
