import { useState } from "react";
import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./jobnew.css";

function JobSummary() {
  return (
    <form id="recruiter-job-summary" className="recruiter-nj-form">
      Job Summary
    </form>
  );
}

function JobRequirements() {
  return (
    <form id="recruiter-job-reqs" className="recruiter-nj-form">
      Job Requirements
    </form>
  );
}

function JobDetails() {
  return (
    <form id="recruiter-job-dets" className="recruiter-nj-form">
      Job Details
    </form>
  );
}

function JobSettings() {
  return (
    <form id="recruiter-job-sets" className="recruiter-nj-form">
      Job Settings
    </form>
  );
}

function JobPromote() {
  return (
    <form id="recruiter-job-promote" className="recruiter-nj-form">
      Job Promote
    </form>
  );
}

function JobCandidates() {
  return (
    <form id="recruiter-job-cands" className="recruiter-nj-form">
      Job Candidates
    </form>
  );
}

export default function RecruiterNewJob() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <JobSummary />;
      case 2:
        return <JobRequirements />;
      case 3:
        return <JobDetails />;
      case 4:
        return <JobSettings />;
      case 5:
        return <JobPromote />;
      case 6:
        return <JobCandidates />;
      default:
        return null;
    }
  };

  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-new-jobs" className="recruiter-cont">
          <div className="recruiter-new-job-cont">{renderStepComponent()}</div>
          <aside>
            <button onClick={() => handleStepChange(1)}>1. Summary</button>
            <button onClick={() => handleStepChange(2)}>2. Requirements</button>
            <button onClick={() => handleStepChange(3)}>3. Details</button>
            <button onClick={() => handleStepChange(4)}>4. Settings</button>
            <button onClick={() => handleStepChange(5)}>5. Promote</button>
            <button onClick={() => handleStepChange(6)}>6. Candidates</button>
          </aside>
        </section>
      </section>
    </main>
  );
}
