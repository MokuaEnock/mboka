import { Link } from "react-router-dom";
import { FaThumbsUp, FaSearch, FaBookmark, FaEnvelope, FaListAlt, FaCog, FaMicrophone, FaCalendarCheck, FaCheckCircle } from "react-icons/fa";
import "./header.css";
import { AiOutlineFileText } from "react-icons/ai";

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

          <Link to="/bookmarks" className="menu-link">
            <FaBookmark />
            <span>Bookmarks</span>
          </Link>
          <Link to="/applied-jobs" className="menu-link">
            <FaListAlt />
            <span>Applied Jobs</span>
          </Link>
          <Link to="/seeker/interviews" className="menu-link">
            <FaMicrophone />
            <span>Interviews</span>
          </Link>
          <Link to="resumes" className="menu-link">
            <AiOutlineFileText />
            <span>Resume</span>
          </Link>
          <Link to="/messages" className="menu-link">
            <FaEnvelope />
            <span>Messages</span>
          </Link>
        </span>

        <span id="seeker-profile">
          <Link to="settings" className="seeker-settings-link">
            <FaCog />
          </Link>

          <Link to="/seeker/profile" className="seeker-profile-link">
            <span id="seeker-profile-image"></span>
            Enock Mokua
          </Link>
        </span>
      </div>
    </nav>
  );
}
