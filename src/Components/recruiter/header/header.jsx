import "./header.css";

import { FaCog, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RecruiterHeader() {
  return (
    <nav className="recruiter-header">
      <form>
        <button type="submit"></button>
        <input type="text" placeholder="Search for jobs, candidates and more" />
      </form>

      <span>
        <Link to="recruiter/settings">
          <FaCog />
        </Link>
        <Link to="recruiter/notifications">
          <FaBell />
        </Link>
        <Link to="recruiter/profile" id="recruiter-profile-image"></Link>
      </span>
    </nav>
  );
}
