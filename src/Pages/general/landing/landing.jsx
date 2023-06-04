import { Link } from "react-router-dom";
import "./landing.css";
import Header from "../../../Components/header/header";

export default function Landing() {
  function Container() {
    return (
      <main className="landing" id="landing">
        <div id="landing-1">
          <div id="landing-cont">
            <div id="landing-1-1">
              <h2>
               By the developers <br/> for the developers
              </h2>

              <p>
                We use the power of Natural Language processing <br />
                to find what suites you.
              </p>

              <span>
                <Link to="/auth/finder">Find a job</Link>
                <Link to="/auth/poster">Post a role</Link>
              </span>
            </div>
            <div id="landing-1-2"></div>
          </div>
        </div>

        <section id="landing-2">
          <div id="landing-2-1">
            <div>
              <span></span>
              <p>OUR SERVICES</p>
            </div>
            <div>
              <h3>Create your profile and let our team handle the rest</h3>
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
          <div id="landing-3-1"></div>
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
