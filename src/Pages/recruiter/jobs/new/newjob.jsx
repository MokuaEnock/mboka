import { useRef, useState } from "react";
import RecruiterHeader from "../../../../Components/recruiter/header/header";
import RecruiterAside from "../../../../Components/recruiter/navigation/navigation";
import "./newjob.css";

function NewJobSectionHeader({ header, text }) {
  return (
    <div className="new-job-header">
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
}

let skillsData = [
  {
    id: 1,
    name: "JavaScript",
    description:
      "A high-level programming language for building interactive web pages.",
  },
  {
    id: 2,
    name: "Python",
    description:
      "A versatile programming language known for its simplicity and readability.",
  },
  {
    id: 3,
    name: "HTML",
    description:
      "The standard markup language for creating web pages and web applications.",
  },
  {
    id: 4,
    name: "CSS",
    description:
      "A stylesheet language used for describing the presentation of a document written in HTML.",
  },
  {
    id: 5,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: 6,
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    id: 7,
    name: "Ruby",
    description:
      "A dynamic, object-oriented programming language known for its simplicity and productivity.",
  },
  {
    id: 8,
    name: "Java",
    description:
      "A general-purpose programming language used for building a wide range of applications.",
  },
  {
    id: 9,
    name: "SQL",
    description:
      "A programming language used for managing and manipulating relational databases.",
  },
  {
    id: 10,
    name: "Git",
    description:
      "A distributed version control system for tracking changes in source code during software development.",
  },
];

let techData = [
  {
    name: "React",
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Angular",
    description: "A TypeScript-based web application framework",
  },
  {
    name: "Vue.js",
    description: "A progressive JavaScript framework",
  },
  {
    name: "Express.js",
    description: "A minimal and flexible Node.js web application framework",
  },
  {
    name: "Django",
    description: "A high-level Python web framework",
  },
  {
    name: "Ruby on Rails",
    description: "A server-side web application framework written in Ruby",
  },
  {
    name: "Spring Boot",
    description: "An opinionated framework for building Java applications",
  },
  {
    name: "Laravel",
    description: "A PHP framework for web applications",
  },
  {
    name: "ASP.NET Core",
    description:
      "A cross-platform framework for building modern web applications",
  },
  {
    name: "Flask",
    description: "A lightweight Python web framework",
  },
];

export default function RecruiterJobNew() {
  const titleRef = useRef(null);
  const requirementsRef = useRef(null);
  const detailsRef = useRef(null);
  const reviewRef = useRef(null);
  const promoteRef = useRef(null);
  const settingsRef = useRef(null);
  const candidatesRef = useRef(null);
  const [activeSection, setActiveSection] = useState(1);

  const handleButtonClick = (ref, sectionNumber) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(sectionNumber);
  };

  const handleNext = () => {
    const nextSection = activeSection + 1;
    if (nextSection <= 7) {
      handleButtonClick(getSectionRef(nextSection), nextSection);
    }
  };

  const handleBack = () => {
    const previousSection = activeSection - 1;
    if (previousSection >= 1) {
      handleButtonClick(getSectionRef(previousSection), previousSection);
    }
  };

  const getSectionRef = (sectionNumber) => {
    switch (sectionNumber) {
      case 1:
        return titleRef;
      case 2:
        return requirementsRef;
      case 3:
        return detailsRef;
      case 4:
        return reviewRef;
      case 5:
        return promoteRef;
      case 6:
        return settingsRef;
      case 7:
        return candidatesRef;
      default:
        return null;
    }
  };

  return (
    <main className="recruiter">
      <RecruiterAside />
      <section className="recruiter-container">
        <RecruiterHeader />
        <section id="recruiter-new-jobs" className="recruiter-cont">
          {/* Form component  */}

          <form id="new-job-form">
            {/* Job title  */}
            <div
              id="job-post-title"
              className={activeSection === 1 ? "active" : ""}
              ref={titleRef}
            >
              <NewJobSectionHeader
                header={"Job Title and Summary"}
                text={"Create the title and summary of your job."}
              />

              <div className="new-job-container">
                <label className="new-job-cont-text">
                  <p>Job title</p>
                  <input type="text" placeholder="Enter the job title" />
                </label>

                <label className="new-job-cont-select">
                  <p>Job category</p>
                  <select>
                    <option disabled selected value="">
                      Select job category
                    </option>
                    <option value="Data-science">Data Science</option>
                  </select>
                </label>

                <label className="new-job-cont-select">
                  <p>Job Type</p>
                  <select>
                    <option disabled selected value="">
                      Select job type
                    </option>
                    <option value="hybrid">Freelance</option>
                    <option value="full-time">Full time</option>
                    <option value="contract">Contract</option>
                    <option value="part-time">Part time</option>
                  </select>
                </label>

                <label className="new-job-cont-select">
                  <p>Employee Level</p>
                  <select>
                    <option value="entry-level">Entry Level</option>
                    <option value="junior">Junior</option>
                    <option value="mid-level">Mid Level</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                    <option value="manager">Manager</option>
                    <option value="executive">Executive</option>
                  </select>
                </label>
              </div>

              <div className="new-job-container">
                <label className="new-job-cont-textarea">
                  <p>Enter your job summary</p>
                  <textarea placeholder="Text area"></textarea>
                </label>
              </div>

              <div className="form-navigation">
                <p></p>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Job requirements */}
            <div
              id="job-post-requirements"
              className={activeSection === 2 ? "active" : ""}
              ref={requirementsRef}
            >
              <NewJobSectionHeader
                header={"Requirements and Qualifications"}
                text={"Add the requirements and qualifications for the job."}
              />

              <div id="job-post-requirements-1">
                <p>Select skills that the desired candidate will have</p>
                <div className="job-post-requirements-1-cont">
                  {skillsData.map((skill) => (
                    <div key={skill.id} className="skill-container">
                      <input
                        type="checkbox"
                        id={skill.id}
                        value={skill.name}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          const container = e.target.parentNode;
                          container.classList.toggle("selected", isChecked);
                        }}
                      />
                      <label htmlFor={skill.id}>{skill.name}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div id="job-post-requirements-2">
                <p>Select technologies relevant to the job</p>
                <div className="job-post-requirements-2-cont">
                  {techData.map((tech) => (
                    <div key={tech.id} className="tech-container">
                      <input
                        type="checkbox"
                        id={tech.id}
                        value={tech.name}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          const container = e.target.parentNode.parentNode;
                          container.classList.toggle("selected", isChecked);
                        }}
                      />
                      <label htmlFor={tech.id}>{tech.name}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div id="job-post-requirments-3">
                <p>Enter the requirements, each on a new line.</p>
                <textarea
                  rows={5}
                  id="job-post-requirments-3-ta"
                  placeholder="Enter requirements, each on a new line..."
                ></textarea>
              </div>

              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Job post Details  */}
            <div
              id="job-post-details"
              className={activeSection === 3 ? "active" : ""}
              ref={detailsRef}
            >
              <NewJobSectionHeader
                header={"Qualifications"}
                text={"Add quaifications about the role"}
              />

              <div id="job-post-requirments-3">
                <p>Enter the qualifications, each on a new line.</p>
                <textarea
                  rows={5}
                  id="job-post-requirments-3-ta"
                  placeholder="Enter qualifications, each on a new line..."
                ></textarea>
              </div>

              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Review job  */}
            <div
              id="job-post-review"
              className={activeSection === 4 ? "active" : ""}
              ref={reviewRef}
            >
              <div className="new-job-header">
                <h2>Review Job</h2>
                <p>Review and make changes to the job posting.</p>
              </div>

              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Promote job  */}
            <div
              id="job-post-promote"
              className={activeSection === 5 ? "active" : ""}
              ref={promoteRef}
            >
              <div className="new-job-header">
                <h2>Promote Job</h2>
                <p>Promote the job to reach a wider audience.</p>
              </div>
              <div id="new-job-promote">
                <span className="new-job-promote">
                  <h3>Free Plan</h3>
                  <button>Select Plan</button>
                </span>
                <span className="new-job-promote">
                  <h3>Premium Plan</h3>
                  <button>Select Plan</button>
                </span>
              </div>
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Job settings  */}
            <div
              id="job-post-settings"
              className={activeSection === 6 ? "active" : ""}
              ref={settingsRef}
            >
              <div className="new-job-header">
                <h2>Job Settings</h2>
                <p>Configure settings for the job posting.</p>
              </div>

              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="button" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>

            {/* Candidates  */}
            <div
              id="job-post-candidates"
              className={activeSection === 7 ? "active" : ""}
              ref={candidatesRef}
            >
              <div className="new-job-header">
                <h2>Candidates</h2>
                <p>
                  Here are some reccomended candidates that fit your job
                  perfectly.
                </p>
              </div>

              <div id="new-job-candidates">
                <span className="new-job-candidates">
                  <p></p>
                  <span>
                    <button>Bookmark</button>
                    <button>View</button>
                  </span>
                </span>

                <span className="new-job-candidates">
                  <p></p>
                  <span>
                    <button>Bookmark</button>
                    <button>View</button>
                  </span>
                </span>

                <span className="new-job-candidates">
                  <p></p>
                  <span>
                    <button>Bookmark</button>
                    <button>View</button>
                  </span>
                </span>

                <span className="new-job-candidates">
                  <p></p>
                  <span>
                    <button>Bookmark</button>
                    <button>View</button>
                  </span>
                </span>

                <span className="new-job-candidates">
                  <p></p>
                  <span>
                    <button>Bookmark</button>
                    <button>View</button>
                  </span>
                </span>

                <span className="new-job-candidates">
                  <p></p>
                  <span>
                    <button>Bookmark</button>
                    <button>View</button>
                  </span>
                </span>
              </div>
              <div className="form-navigation">
                <button type="button" onClick={handleBack}>
                  Back
                </button>
              </div>
            </div>
          </form>

          {/* Aside component */}
          <aside>
            <button
              onClick={() => handleButtonClick(titleRef, 1)}
              className={activeSection === 1 ? "active" : ""}
            >
              1. Title
            </button>
            <button
              onClick={() => handleButtonClick(requirementsRef, 2)}
              className={activeSection === 2 ? "active" : ""}
            >
              2. Requirements
            </button>
            <button
              onClick={() => handleButtonClick(detailsRef, 3)}
              className={activeSection === 3 ? "active" : ""}
            >
              3. Details
            </button>
            <button
              onClick={() => handleButtonClick(reviewRef, 4)}
              className={activeSection === 4 ? "active" : ""}
            >
              4. Review
            </button>
            <button
              onClick={() => handleButtonClick(promoteRef, 5)}
              className={activeSection === 5 ? "active" : ""}
            >
              5. Promote
            </button>
            <button
              onClick={() => handleButtonClick(settingsRef, 6)}
              className={activeSection === 6 ? "active" : ""}
            >
              6. Settings
            </button>
            <button
              onClick={() => handleButtonClick(candidatesRef, 7)}
              className={activeSection === 7 ? "active" : ""}
            >
              7. Candidates
            </button>
          </aside>
        </section>
      </section>
    </main>
  );
}
