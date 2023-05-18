import { useParams } from "react-router-dom";
import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./detail.css";

export default function RecruiterCandidatesDetail() {
  const { id } = useParams();

  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section className="recruiter-cont">
          <h2>Candidate Detail {id} </h2>
        </section>
      </section>
    </main>
  );
}
