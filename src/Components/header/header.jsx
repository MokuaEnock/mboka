import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/" className="logo">
          Mboka
        </Link>

        <span>
          <Link to="/">Home</Link>
        </span>
        
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}
