import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaEnvelope,
  FaListAlt,
  FaSearch,
  FaThumbsUp,
  FaCog,
} from "react-icons/fa";
import "./header.css";

export default function SeekerHeader() {
  return (
    <nav className="seeker-header">
      <div className="seeker-h-cont">
        <Link className="seeker-logo" to="/seeker">
          Insunity
        </Link>

        <span id="seeker-header-info">
          <Link to="/seeker/reccs" className="menu-link">
            <FaThumbsUp />
            <span>Recommendations</span>
          </Link>
          <Link to="/find-job" className="menu-link">
            <FaSearch />
            <span>Explore</span>
          </Link>
          <Link to="/bookmarks" className="menu-link">
            <FaBookmark />
            <span>Bookmarks</span>
          </Link>
          <Link to="/messages" className="menu-link">
            <FaEnvelope />
            <span>Messages</span>
          </Link>
          <Link to="/applied-jobs" className="menu-link">
            <FaListAlt />
            <span>Applied Jobs</span>
          </Link>
        </span>

        <span id="seeker-profile">
          <Link to="settings" className="seeker-settings-link">
            <FaCog />
          </Link>

          <Link to="profile" className="seeker-profile-link">
            <span id="seeker-profile-image"></span>
            Enock Mokua
          </Link>
        </span>
      </div>
    </nav>
  );
}
