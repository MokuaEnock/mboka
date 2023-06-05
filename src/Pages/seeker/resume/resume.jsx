import "./resume.css";
import SeekerHeader from "../../../Components/seeker/header/header";
import HarvardResume from "../../../Components/pdfs/resume";

let resumeData = [
  {
    id: 1,
    title: "Data Scientist",
    category: "Data Science",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    category: "Machine Learning",
  },
  {
    id: 3,
    title: "Data Analyst",
    category: "Data Science",
  },
  {
    id: 4,
    title: "Machine Learning Researcher",
    category: "Machine Learning",
  },
  {
    id: 5,
    title: "Data Engineer",
    category: "Data Science",
  },
  {
    id: 6,
    title: "Machine Learning Specialist",
    category: "Machine Learning",
  },
];
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

            <div id="resumes-header-cont">
              {resumeData.map((resume) => (
                <div key={resume.id} className="resumes-card">
                  <span className="resumes-card-body"></span>
                  <span className="resumes-card-foot">{resume.title}</span>
                </div>
              ))}
            </div>
          </div>

          <aside id="seeker-resumes-3">
            <h2>Summary</h2>
            <HarvardResume />
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
