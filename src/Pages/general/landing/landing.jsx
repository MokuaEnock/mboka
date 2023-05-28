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
          </div>
          <div id="landing-1-2"></div>
        </section>
        <section id="landing-2">
          <div id="landing-2-1"></div>
          <div id="landing-2-1"></div>
        </section>
        <div id="landing-3"></div>
        <section id="landing-4"></section>
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
