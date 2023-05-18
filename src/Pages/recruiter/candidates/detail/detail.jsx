import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./detail.css";

export default function RecruiterCandidatesDetail() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section className="recruiter-cont">
          This is the candidate detail
        </section>
      </section>
    </main>
  );
}
