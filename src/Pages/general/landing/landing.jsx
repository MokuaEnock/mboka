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
              <br /> for Your Team
            </h2>
            <p className="landing-c-p1">
              We employ advanced machine learning algorithms to pre-screen tech
              talent for your team.
            </p>
            <span className="landing-c-links">
              <Link>Find open roles</Link>
              <Link>Post a role</Link>
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
