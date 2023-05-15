import { useParams } from "react-router-dom";

import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./detail.css";

export default function RecruiterJobDetail() {
  let { id } = useParams();

  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-new-jobs" className="recruiter-cont">
          Recruiter Job detailed Components
          <p>`This is Job id #{id}`</p>
        </section>
      </section>
    </main>
  );
}
