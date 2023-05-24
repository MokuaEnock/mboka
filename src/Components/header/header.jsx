import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
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
