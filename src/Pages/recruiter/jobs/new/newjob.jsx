import React, { useRef } from "react";
import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./newjob.css";

export default function RecruiterJobNew() {
  const titleRef = useRef(null);
  const requirementsRef = useRef(null);
  const detailsRef = useRef(null);
  const reviewRef = useRef(null);
  const promoteRef = useRef(null);

  const handleButtonClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-new-jobs" className="recruiter-cont">
          <form>
            <div id="job-post-title" ref={titleRef}>
              The title and summary
            </div>
            <div id="job-post-requirements" ref={requirementsRef}>
              Requirements and qualifications
            </div>
            <div id="job-post-details" ref={detailsRef}>
              pos details
            </div>
            <div id="job-post-review" ref={reviewRef}>
              review job
            </div>
            <div id="job-post-promote" ref={promoteRef}>
              promote job
            </div>
          </form>
          <aside>
            <button onClick={() => handleButtonClick(titleRef)}>
              1. Title
            </button>
            <button onClick={() => handleButtonClick(requirementsRef)}>
              2. Requirements
            </button>
            <button onClick={() => handleButtonClick(detailsRef)}>
              3. Details
            </button>
            <button onClick={() => handleButtonClick(reviewRef)}>
              4. Review
            </button>
            <button onClick={() => handleButtonClick(promoteRef)}>
              5. Promote
            </button>
          </aside>
        </section>
      </section>
    </main>
  );
}
