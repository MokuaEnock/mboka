import { Link } from "react-router-dom";
import "./navigation.css";

export default function RecruiterAside() {
  return (
    <aside className="recruiter-aside">
      <h3>Mboka</h3>
      <Link to="/recruiter">Dashboard</Link>
      <Link to="/recruiter/messages">Messages</Link>
      <Link to="/recruiter/notifications">Notifications</Link>
      <p>Recruitment</p>
      <Link to="/recruiter/jobs">Jobs</Link>
      <Link to="/recruiter/candidates">Candidates</Link>
      <Link to="/recruiter/interviews">Interviews</Link>
      <Link to="/recruiter/reports">Reports</Link>
      <Link to="/recruiter/settings">Settings</Link>
    </aside>
  );
}
