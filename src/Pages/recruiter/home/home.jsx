import RecruiterHeader from "../../../Components/recruiter/header/header";
import RecruiterAside from "../../../Components/recruiter/navigation/navigation";
import "./home.css";

export default function Recruiter() {
  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <div id="recruiter-dashboard" className="recruiter-cont"></div>
      </section>
    </main>
  );
}
