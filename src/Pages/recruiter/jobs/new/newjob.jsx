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

  const handleNext = () => {
    const nextSection = activeSection + 1;
    if (nextSection <= 7) {
      handleButtonClick(getSectionRef(nextSection), nextSection);
    }
  };

  const handleBack = () => {
    const previousSection = activeSection - 1;
    if (previousSection >= 1) {
      handleButtonClick(getSectionRef(previousSection), previousSection);
    }
  };

  const getSectionRef = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        return titleRef;
      case 2:
        return requirementsRef;
      case 3:
        return detailsRef;
      case 4:
        return reviewRef;
      case 5:
        return promoteRef;
      case 6:
        return settingsRef;
      case 7:
        return candidatesRef;
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
          {/* Form component  */}

          <form id="new-job-form">
            {/* Job title  */}
            <div
              id="job-post-title"
              className={activeSection === 1 ? "active" : ""}
              ref={titleRef}
            >
              <div className="new-job-header">
                <h2>Job Title and Summary</h2>
                <p>Create the title and summary of your job. Keep it simple.</p>
              </div>
              
              {/* Next and Back buttons */}
              <div className="form-navigation">
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Job requirements */}
            <div
              id="job-post-requirements"
              className={activeSection === 2 ? "active" : ""}
              ref={requirementsRef}
            >
              <div className="new-job-header">
                <h2>Requirements and Qualifications</h2>
                <p>Add the requirements and qualifications for the job.</p>
              </div>
              {/* Next and Back buttons */}
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Job post Details  */}
            <div
              id="job-post-details"
              className={activeSection === 3 ? "active" : ""}
              ref={detailsRef}
            >
              <div className="new-job-header">
                <h2>Job Details</h2>
                <p>Add more details about the job.</p>
              </div>
              {/* Next and Back buttons */}
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Review job  */}
            <div
              id="job-post-review"
              className={activeSection === 4 ? "active" : ""}
              ref={reviewRef}
            >
              <div className="new-job-header">
                <h2>Review Job</h2>
                <p>Review and make changes to the job posting.</p>
              </div>
              {/* Next and Back buttons */}
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Promote job  */}
            <div
              id="job-post-promote"
              className={activeSection === 5 ? "active" : ""}
              ref={promoteRef}
            >
              <div className="new-job-header">
                <h2>Promote Job</h2>
                <p>Promote the job to reach a wider audience.</p>
              </div>
              {/* Next and Back buttons */}
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Job settings  */}
            <div
              id="job-post-settings"
              className={activeSection === 6 ? "active" : ""}
              ref={settingsRef}
            >
              <div className="new-job-header">
                <h2>Job Settings</h2>
                <p>Configure settings for the job posting.</p>
              </div>
              {/* Next and Back buttons */}
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Candidates  */}
            <div
              id="job-post-candidates"
              className={activeSection === 7 ? "active" : ""}
              ref={candidatesRef}
            >
              <div className="new-job-header">
                <h2>Candidates</h2>
                <p>Manage candidates for the job.</p>
              </div>
              {/* Back button */}
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
              </div>
            </div>
          </form>

          {/* Aside component */}
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
