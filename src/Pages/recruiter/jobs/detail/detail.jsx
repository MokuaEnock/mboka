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
        <section id="recruiter-detailed-jobs" className="recruiter-cont">
          <div id="recruiter-detailed-cont">
            <div id="recruiter-detailed-stats">
              <div id="recruiter-stats-header">
                <h2>Applications</h2>
                <select>
                  <option value="last-seven">7 days</option>
                  <option value="last-fourteen">14 days</option>
                  <option value="last-thirty">30 days</option>
                </select>
              </div>
              <div id="recruiter-stats-cont">
                <span className="recruiter-stats-cont-div"></span>
                <span className="recruiter-stats-cont-div"></span>
                <span id="recruiter-stats-cont-graph"></span>
              </div>
            </div>

            <div id="recruiter-candidates-name">
              <h3>Candidates</h3>

              <button>Filter by</button>
            </div>

            <div id="recruiter-cands-header">
              <span>Name</span>
              <span>Rating</span>
              <span>Level</span>
              <span>Stage</span>
              <span>Application date</span>
            </div>

            <ul id="recruiter-detailed-candidates">
              <li className="recruiter-detailed-candidates"></li>
              <li className="recruiter-detailed-candidates"></li>
              <li className="recruiter-detailed-candidates"></li>
              <li className="recruiter-detailed-candidates"></li>
            </ul>
          </div>
          <aside id="recruiter-detailed-aside"></aside>
        </section>
      </section>
    </main>
  );
}
