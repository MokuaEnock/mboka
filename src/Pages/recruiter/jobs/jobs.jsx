import "./jobs.css";

import { FaBriefcase } from "react-icons/fa";

import RecruiterHeader from "../../../Components/recruiter/header/header";
import RecruiterAside from "../../../Components/recruiter/navigation/navigation";
import { Link } from "react-router-dom";

let Jobdata = [
  {
    id: 1,
    name: "Item 1",
    description: "This is the first item.",
    price: 10.99,
    quantity: 20,
  },
  {
    id: 2,
    name: "Item 2",
    description: "This is the second item.",
    price: 19.99,
    quantity: 15,
  },
  {
    id: 3,
    name: "Item 3",
    description: "This is the third item.",
    price: 5.99,
    quantity: 30,
  },
  {
    id: 4,
    name: "Item 4",
    description: "This is the fourth item.",
    price: 7.49,
    quantity: 25,
  },
  {
    id: 5,
    name: "Item 5",
    description: "This is the fifth item.",
    price: 12.99,
    quantity: 10,
  },
];

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
            <Link to="/recruiter/jobs/new">
              <FaBriefcase />
              Post a job
            </Link>
          </aside>
        </section>
      </section>
    </main>
  );
}
