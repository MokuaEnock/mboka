import { Link } from "react-router-dom";
import RecruiterHeader from "../../../Components/recruiter/header/header";
import RecruiterAside from "../../../Components/recruiter/navigation/navigation";
import "./home.css";

export default function Recruiter() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-dashboard" className="recruiter-cont">
          <article id="recruiter-dashboard-1">
            <div id="recruiter-d1-header">
              <h3>Current Openings</h3>
              <select>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="category">Category</option>
              </select>
            </div>
            <div id="recruiter-job-cards">
              <span className="recruiter-job-card"></span>
              <span className="recruiter-job-card"></span>
              <span className="recruiter-job-card"></span>
            </div>
          </article>

          <article id="recruiter-dashboard-2">
            <div id="recruiter-d1-header">
              <h3>Quick Actions</h3>
            </div>
            <div id="recruiter-actions">
              <span className="recruiter-dashboard-action">
                <p></p>
                <Link to="">Post a job</Link>
              </span>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
