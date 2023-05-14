import "./jobs.css";

import RecruiterHeader from "../../../Components/recruiter/header/header";
import RecruiterAside from "../../../Components/recruiter/navigation/navigation";

export default function RecruiterJobs() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-jobs" className="recruiter-cont">
          <div></div>
          <aside></aside>
        </section>
      </section>
    </main>
  );
}
