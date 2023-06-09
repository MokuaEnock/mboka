import { Link } from "react-router-dom";
import "./landing.css";
import Header from "../../../Components/header/header";

export default function Landing() {
  function Container() {
    return (
      <main className="landing" id="landing">
        <div id="landing-1">
          <div id="landing-cont">
            <p className="landing-c-p0">Built for Engineers, by Engineers </p>
            <h2>
              Discover the <strong>Perfect</strong> Tech Talent
              <br /> to <strong>Grow</strong> Your Team
            </h2>
            <p className="landing-c-p1">
              We employ advanced machine learning algorithms to pre-screen tech
              talent for your team.
            </p>
            <span className="landing-c-links">
              <Link to="/auth/finder">Find open roles</Link>
              <Link  to="/auth/poster">Post a role</Link>
            </span>
          </div>
        </div>

        <section id="landing-2">
          <div id="landing-2-1">
            <div>
              <span></span>
              <p>OUR SERVICES</p>
            </div>
            <div>
              <h3>Create your profile and let data handle the rest</h3>
              <p>
                We use advanced machine learning algorithms to match you and
                your future employer. Reduce the time spent on evaluating your
                potential and let us do it for you.
              </p>
            </div>
          </div>
          <div id="landing-2-2">
            <span className="landing-2-2"></span>
            <span className="landing-2-2"></span>
            <span className="landing-2-2"></span>
            <span className="landing-2-2"></span>
          </div>
        </section>

        <div id="landing-3">
          <div id="landing-3-1">
            <div id="landing-3-1-1">
              <h2>How we work</h2>
              <p>
                We have five simple steps to get you into you dream job,
                discover the process and be proud of the process.
              </p>
            </div>
            <div id="landing-3-1-2">
              <p>
                Keep in mind the following as you create your profile for the
                sake of getting better reccoendations.
                <ul>
                  <li>Be honest</li>
                  <li>Be detailed.</li>
                </ul>
              </p>
            </div>
          </div>
          <div id="landing-3-2">
            <div className="landing-3-2"></div>
            <div className="landing-3-2"></div>
            <div className="landing-3-2"></div>
            <div className="landing-3-2"></div>
            <div className="landing-3-2"></div>
            <div className="landing-3-2"></div>
          </div>
        </div>

        <section id="landing-4">
          <div id="landing-4-1"></div>
          <div id="landing-4-2">
            <div className="landing-4-2"></div>
            <div className="landing-4-2"></div>
            <div className="landing-4-2"></div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <Header />
      <Container />
    </>
  );
}
