import "./resume.css";
import SeekerHeader from "../../../Components/seeker/header/header";

export default function SeekerResume() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-resumes-1">
            <h2>Resumes</h2>
            <p>All</p>
            <p>Data Science</p>
            <p>Machine Learning</p>

            <h2>Cover Letter</h2>
            <p>Templates</p>
            <p>Generate</p>
          </aside>

          <div id="seeker-resumes-2">
            <div id="resumes-header">
              <h2 className="resumes-header-title">All Resume Templates</h2>
              <p className="resumes-header-text">
                Review all resume templates that are related to you. Already
                customized to fit roles related to your profile.
              </p>
            </div>
          </div>

          <aside id="seeker-resumes-3">
            <h2>Summary</h2>
            <button>Download Resume</button>
          </aside>
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
