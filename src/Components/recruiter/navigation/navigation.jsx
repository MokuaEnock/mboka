import { Link } from "react-router-dom";
import {
  FaHome,
  FaEnvelope,
  FaBell,
  FaSuitcase,
  FaUserFriends,
  FaClipboardList,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import "./navigation.css";

export default function RecruiterAside() {
  return (
    <aside className="recruiter-aside">
      <h3>Mboka</h3>
      <Link to="/recruiter">
        <FaHome /> Dashboard
      </Link>
      <Link to="/recruiter/messages">
        <FaEnvelope /> Messages
      </Link>
      <Link to="/recruiter/notifications">
        <FaBell /> Notifications
      </Link>
      <p>RECRUITMENT</p>
      <Link to="/recruiter/jobs">
        <FaSuitcase /> Jobs
      </Link>
      <Link to="/recruiter/candidates">
        <FaUserFriends /> Candidates
      </Link>
      <Link to="/recruiter/interviews">
        <FaCalendarAlt /> Interviews
      </Link>
      <Link to="/recruiter/reports">
        <FaChartBar /> Reports
      </Link>
      <Link to="/recruiter/settings">
        <FaCog /> Settings
      </Link>
    </aside>
  );
}
