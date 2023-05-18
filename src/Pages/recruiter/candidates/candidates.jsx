import RecruiterHeader from "../../../Components/recruiter/header/header";
import RecruiterAside from "../../../Components/recruiter/navigation/navigation";
import "./candidates.css";

export default function RecruiterCandidates() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section className="recruiter-cont">This are teh candidates</section>
      </section>
    </main>
  );
}
