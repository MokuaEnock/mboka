import "./jobs.css";

import { FaBriefcase } from "react-icons/fa";

import RecruiterHeader from "../../../Components/recruiter/header/header";
import RecruiterAside from "../../../Components/recruiter/navigation/navigation";
import { Link } from "react-router-dom";

export default function RecruiterJobs() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-jobs" className="recruiter-cont">
          <div>
            <Link to="" className="jobs-card"></Link>
            <Link to="" className="jobs-card"></Link>
            <Link to="" className="jobs-card"></Link>
            <Link to="" className="jobs-card"></Link>
            <Link to="" className="jobs-card"></Link>
            <Link to="" className="jobs-card"></Link>
            <Link to="" className="jobs-card"></Link>
            <Link to="" className="jobs-card"></Link>
         
          </div>
          <aside id="recruiter-jobs-aside">
            <div></div>
            <h3>Where to stranger?</h3>
            <Link to="/recruiter/job/new">
              <FaBriefcase />
              Post a job
            </Link>
          </aside>
        </section>
      </section>
    </main>
  );
}
