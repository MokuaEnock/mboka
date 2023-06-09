import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
// import "./newjob.css";
import "./jobnew.css";

function JobSummary() {
  <form id="recruiter-job-summary" className="recruiter-nj-form"></form>;
}

function JobRequirements() {
  <form id="recruiter-job-reqs" className="recruiter-nj-form"></form>;
}

function JobDetails() {
  <form id="recruiter-job-dets" className="recruiter-nj-form"></form>;
}

function JobSettings() {
  <form id="recruiter-job-sets" className="recruiter-nj-form"></form>;
}

function JobPromote() {
  <form id="recruiter-job-promote" className="recruiter-nj-form"></form>;
}

function JobCandidates() {
  <form id="recruiter-job-cands" className="recruiter-nj-form"></form>;
}

export default function RecruiterNewJob() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-new-jobs" className="recruiter-cont">
          <div className="recruiter-new-job-cont"></div>
          <aside>
            <button>1. Summary</button>
            <button>2. Requirements</button>
            <button>3. Details</button>
            <button>4. Settings</button>
            <button>5. Promote</button>
            <button>6. Candidates</button>
          </aside>
        </section>
      </section>
    </main>
  );
}
