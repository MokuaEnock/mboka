import { Link } from "react-router-dom";
import RecruiterHeader from "../../../Components/recruiter/header/header";
import RecruiterAside from "../../../Components/recruiter/navigation/navigation";
import "./candidates.css";

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

export default function RecruiterCandidates() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section className="recruiter-cont">
          <ul>
            {applicants.applicants.map((applicant) => (
              <Link
                key={applicant.id}
                to={`/recruiter/candidates/${applicant.id}`}
              >
                <li>{applicant.name}</li>
              </Link>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
