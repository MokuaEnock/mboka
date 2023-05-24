import SeekerHeader from "../../../Components/seeker/header/header";
import "./interviews.css";

export default function SeekerInterviews() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-interview">
          <div id="seeker-cont1">
            <span id="seeker-cont1-head">
              <h3>Your Interviews</h3>
              <button>Filter By</button>
            </span>
            <div id="seeker-cont1-body">
              <div className="seeker-interview-card">Interview 1</div>
              <div className="seeker-interview-card">Interview 2</div>
              <div className="seeker-interview-card">Interview 3</div>
              <div className="seeker-interview-card">Interview 4</div>
            </div>
            <span id="seeker-cont1-foot">
              <button>Back</button>
              <span>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </span>
              <button>Next</button>
            </span>
          </div>
          <article id="seeker-cont2"></article>
        </section>
      </main>
    );
  }

  return (
    <>
      <SeekerHeader />
      <Container />
    </>
  );
}
