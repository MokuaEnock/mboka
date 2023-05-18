import { useState } from "react";
import { useParams } from "react-router-dom";
import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./detail.css";

let applicants = {
  applicants: [
    {
      id: 1,
      name: "John Smith",
      age: 28,
      role: "Data Scientist",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      experience: 5,
      education: "Bachelor's degree in Computer Science",
      skills: ["Java", "Python", "JavaScript"],
      desired_salary: 60000,
      availability: "Full-time",
      location: "New York",
    },
    {
      id: 2,
      name: "Emily Johnson",
      age: 32,
      role: "Software Engineer",
      email: "emily.johnson@example.com",
      phone: "+1 (555) 987-6543",
      experience: 8,
      education: "Master's degree in Marketing",
      skills: ["Digital Marketing", "Social Media Management", "SEO"],
      desired_salary: 70000,
      availability: "Full-time",
      location: "Los Angeles",
    },
  ],
};

export default function RecruiterJobDetail() {
  const { id } = useParams();
  const [selectedApplicant, setSelectedApplicant] = useState(
    applicants.applicants[0]
  );

  const handleApplicantClick = (applicant) => {
    setSelectedApplicant(applicant);
  };

  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-detailed-jobs" className="recruiter-cont">
          <div id="recruiter-detailed-cont">
            <div id="recruiter-detailed-stats">
              <div id="recruiter-stats-header">
                <h2>Applications</h2>
                <select>
                  <option value="last-seven">7 days</option>
                  <option value="last-fourteen">14 days</option>
                  <option value="last-thirty">30 days</option>
                </select>
              </div>
              <div id="recruiter-stats-cont">
                <span className="recruiter-stats-cont-div"></span>
                <span className="recruiter-stats-cont-div"></span>
                <span id="recruiter-stats-cont-graph"></span>
              </div>
            </div>

            <div id="recruiter-candidates-name">
              <h3>Candidates</h3>
              <button>Filter by</button>
            </div>

            <div id="recruiter-cands-header">
              <span>Name</span>
              <span>Rating</span>
              <span>Level</span>
              <span>Stage</span>
              <span>Application date</span>
            </div>

            <ul id="recruiter-detailed-candidates">
              {applicants.applicants.map((applicant, index) => (
                <li
                  key={index}
                  className="recruiter-detailed-candidates"
                  onClick={() => handleApplicantClick(applicant)}
                >
                  <p>{applicant.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside id="recruiter-detailed-aside">
            <h3>Candidate Details</h3>
            <div id="recruiter-da-header">
              <div>
                <span></span>
                <h5>{selectedApplicant.name}</h5>
                <p>{selectedApplicant.role}</p>
              </div>

              <div>
                <span>{selectedApplicant.email}</span>
                <span>{selectedApplicant.phone}</span>
              </div>
            </div>

            <div id="recruiter-da-details">
              <h3>Application details</h3>
              <span className="recruiter-da-details">
                <span>1</span>
                <span>
                  <p>Screening</p>
                  <i>March 20 2023</i>
                </span>
              </span>

              <span className="recruiter-da-details">
                <span>2</span>
                <span>
                  <p>Design Challenge</p>
                  <i>March 20 2023</i>
                </span>
              </span>

              <span className="recruiter-da-details">
                <span>1</span>
                <span>
                  <p>Screening</p>
                  <i>March 20 2023</i>
                </span>
              </span>

              <span className="recruiter-da-details">
                <span>4</span>
                <span>
                  <p>HR Round</p>
                  <i>March 20 2023</i>
                </span>
              </span>

              <span className="recruiter-da-details">
                <span>5</span>
                <span>
                  <p>Hired</p>
                  <i>March 20 2023</i>
                </span>
              </span>
            </div>

            <button id="recruiter-da-button">View Details</button>
          </aside>
        </section>
      </section>
    </main>
  );
}
