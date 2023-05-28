import { Link } from "react-router-dom";
import "./landing.css";
import Header from "../../../Components/header/header";

export default function Landing() {
  function Container() {
    return (
      <main className="landing" id="landing">
        <section id="landing-1">
          <div id="landing-1-1">
            <h2>Find The Job That You Deserve</h2>
            <form></form>

            <span>
              <form>
                <input
                  type="text"
                  placeholder="Search job title, keywords or Company"
                />
                <input type="text" placeholder="Province, city or region" />
                <button type="submit">Search</button>
              </form>
              <p>Browse job offers by keyword or Location</p>
            </span>

            <div>
              <Link to="/auth/finder">For Seekers</Link>
              <Link to="/auth/poster">For Posters</Link>
            </div>
          </div>
          <div id="landing-1-2"></div>
        </section>

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
