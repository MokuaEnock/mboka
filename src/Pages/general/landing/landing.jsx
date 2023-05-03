import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  return (
    <main className="landing">
      <section id="landing-1">
        <h1>We power organizations through the right talent</h1>
        <p>
          Find the right candidate for your next role by exploring our talent
          catelogue.
        </p>
        <span>
          <Link to="/signup">Post an open role</Link>
          <Link to="/signup">Find a role</Link>
        </span>
      </section>
    </main>
  );
}
