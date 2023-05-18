import { useRef, useState } from "react";
import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./newjob.css";

export default function RecruiterJobNew() {
  const titleRef = useRef(null);
  const requirementsRef = useRef(null);
  const detailsRef = useRef(null);
  const reviewRef = useRef(null);
  const promoteRef = useRef(null);
  const settingsRef = useRef(null);
  const candidatesRef = useRef(null);
  const [activeSection, setActiveSection] = useState(1);

  const handleButtonClick = (ref, sectionNumber) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(sectionNumber);
  };

  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-new-jobs" className="recruiter-cont">
          <form>
            <div
              id="job-post-title"
              className={activeSection === 1 ? "active" : ""}
              ref={titleRef}
            >
              The title and summary
            </div>
            <div
              id="job-post-requirements"
              className={activeSection === 2 ? "active" : ""}
              ref={requirementsRef}
            >
              Requirements and qualifications
            </div>
            <div
              id="job-post-details"
              className={activeSection === 3 ? "active" : ""}
              ref={detailsRef}
            >
              Job details
            </div>
            <div
              id="job-post-review"
              className={activeSection === 4 ? "active" : ""}
              ref={reviewRef}
            >
              Review job
            </div>
            <div
              id="job-post-promote"
              className={activeSection === 5 ? "active" : ""}
              ref={promoteRef}
            >
              Promote job
            </div>
            <div
              id="job-post-settings"
              className={activeSection === 6 ? "active" : ""}
              ref={settingsRef}
            >
              Job settings
            </div>
            <div
              id="job-post-candidates"
              className={activeSection === 7 ? "active" : ""}
              ref={candidatesRef}
            >
              Candidates
            </div>
          </form>
          <aside>
            <button
              onClick={() => handleButtonClick(titleRef, 1)}
              className={activeSection === 1 ? "active" : ""}
            >
              1. Title
            </button>
            <button
              onClick={() => handleButtonClick(requirementsRef, 2)}
              className={activeSection === 2 ? "active" : ""}
            >
              2. Requirements
            </button>
            <button
              onClick={() => handleButtonClick(detailsRef, 3)}
              className={activeSection === 3 ? "active" : ""}
            >
              3. Details
            </button>
            <button
              onClick={() => handleButtonClick(reviewRef, 4)}
              className={activeSection === 4 ? "active" : ""}
            >
              4. Review
            </button>
            <button
              onClick={() => handleButtonClick(promoteRef, 5)}
              className={activeSection === 5 ? "active" : ""}
            >
              5. Promote
            </button>
            <button
              onClick={() => handleButtonClick(settingsRef, 6)}
              className={activeSection === 6 ? "active" : ""}
            >
              6. Settings
            </button>
            <button
              onClick={() => handleButtonClick(candidatesRef, 7)}
              className={activeSection === 7 ? "active" : ""}
            >
              7. Candidates
            </button>
          </aside>
        </section>
      </section>
    </main>
  );
}
