import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaEnvelope,
  FaListAlt,
  FaSearch,
  FaThumbsUp,
} from "react-icons/fa";
import "./header.css";

export default function SeekerHeader() {
  return (
    <nav className="seeker-header">
      <div className="seeker-h-cont">
        <Link className="seeker-logo" to="/seeker">
          Insunity
        </Link>

        <span>
          <Link to="/recommendations">
            <FaThumbsUp />
            Reccomendations
          </Link>
          <Link to="/find-job">
            <FaSearch />
            Explore
          </Link>
          <Link to="/bookmarks">
            <FaBookmark />
            Bookmarks
          </Link>
          <Link to="/messages">
            <FaEnvelope />
            Messages
          </Link>
          <Link to="/applied-jobs">
            <FaListAlt />
            Applied Jobs
          </Link>
        </span>

        <select>
          <option></option>
          <option value="seeker-profile">Profile</option>
          <option value="seeker-settings">Settings</option>
        </select>
      </div>
    </nav>
  );
}
