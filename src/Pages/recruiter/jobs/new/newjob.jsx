import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./newjob.css";

export default function RecruiterJobNew() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-new-jobs" className="recruiter-cont">
          <div></div>
          <aside>
            <h4>1. Title</h4>
            <h4>2. Requirements</h4>
            <h4>3. Details</h4>
            <h4>4. Review</h4>
            <h4>5. Promote</h4>
          </aside>
        </section>
      </section>
    </main>
  );
}
