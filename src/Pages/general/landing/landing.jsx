import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  function Header() {
    return (
      <header>
        <div className="header">
          <Link to="/" className="logo">
            Insunity
          </Link>

          <span>
            <Link to="/">Home</Link>
            <Link to="/">Interviews</Link>
          </span>

          <Link to="/auth/login" className="header-login">
            Login
          </Link>
        </div>
      </header>
    );
  }

  function Container() {
    return (
      <main className="landing">
        <section id="landing-1">
          <div className="landing-main">
            <h1>We power organizations through the right talent</h1>
            <p>
              Find the right candidate for your next role by exploring our
              talent catalogue.
            </p>
            <span>
              <Link to="/auth/poster">Post an open role</Link>
              <Link to="/auth/finder">Find a role</Link>
            </span>
          </div>

          <div className="landing-main2">
            <h2>The process</h2>

            <div>
              <span></span>
            </div>
          </div>
        </section>

        <section id="landing-2"></section>
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
