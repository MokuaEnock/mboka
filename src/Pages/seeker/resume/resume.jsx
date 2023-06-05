import "./resume.css";
import SeekerHeader from "../../../Components/seeker/header/header";
import HarvardResume from "../../../Components/pdfs/resume";
import { useState } from "react";

let resumeData = [
  {
    id: 1,
    title: "Data Scientist",
    category: "Data Science",
    description:
      "Responsible for analyzing large datasets and extracting insights.",
    requirements: [
      "Strong background in statistics and mathematics",
      "Experience with machine learning algorithms",
      "Proficiency in programming languages like Python or R",
    ],
    responsibilities: [
      "Develop and implement data models and algorithms",
      "Collect, clean, and preprocess data for analysis",
      "Perform statistical analysis and hypothesis testing",
      "Create data visualizations and reports",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    category: "Machine Learning",
    description:
      "Design and implement machine learning models for real-world applications.",
    requirements: [
      "Solid understanding of machine learning algorithms and techniques",
      "Proficiency in programming languages like Python or Java",
      "Experience with deep learning frameworks like TensorFlow or PyTorch",
    ],
    responsibilities: [
      "Build and deploy machine learning models",
      "Optimize models for performance and scalability",
      "Collaborate with cross-functional teams to integrate ML solutions",
      "Stay up-to-date with the latest advancements in machine learning",
    ],
  },
  {
    id: 3,
    title: "Data Analyst",
    category: "Data Science",
    description:
      "Analyze and interpret complex data to provide valuable insights.",
    requirements: [
      "Proficiency in SQL and data querying",
      "Experience with data visualization tools like Tableau or Power BI",
      "Strong analytical and problem-solving skills",
    ],
    responsibilities: [
      "Collect, clean, and validate data from various sources",
      "Perform data analysis and generate reports",
      "Identify trends, patterns, and anomalies in the data",
      "Communicate findings and recommendations to stakeholders",
    ],
  },
  {
    id: 4,
    title: "Machine Learning Researcher",
    category: "Machine Learning",
    description:
      "Conduct research to advance the field of machine learning and develop novel algorithms.",
    requirements: [
      "Strong theoretical knowledge of machine learning concepts",
      "Experience with research methodologies and experimentation",
      "Proficiency in programming languages like Python or MATLAB",
    ],
    responsibilities: [
      "Design and conduct experiments to evaluate machine learning models",
      "Develop new algorithms and techniques",
      "Publish research papers and attend conferences",
      "Collaborate with academic and industry partners on research projects",
    ],
  },
  {
    id: 5,
    title: "Data Engineer",
    category: "Data Science",
    description:
      "Design and implement data infrastructure to support data-driven applications.",
    requirements: [
      "Expertise in data modeling and database design",
      "Experience with ETL (Extract, Transform, Load) processes",
      "Proficiency in programming languages like Python or Scala",
    ],
    responsibilities: [
      "Design and build data pipelines to collect and process data",
      "Optimize database performance and scalability",
      "Ensure data quality and integrity",
      "Collaborate with data scientists and analysts to fulfill data requirements",
    ],
  },
  {
    id: 6,
    title: "Machine Learning Specialist",
    category: "Machine Learning",
    description:
      "Provide expertise in machine learning to develop innovative solutions.",
    requirements: [
      "Deep understanding of machine learning algorithms and techniques",
      "Experience with model evaluation and performance metrics",
      "Proficiency in programming languages like Python or C++",
    ],
    responsibilities: [
      "Analyze business requirements and design machine learning solutions",
      "Train and fine-tune machine learning models",
      "Evaluate model performance and make improvements",
      "Stay updated with the latest advancements in machine learning",
    ],
  },
];

export default function SeekerResume() {
  const [selectedResume, setSelectedResume] = useState(null);

  function handleResumeClick(resume) {
    setSelectedResume(resume);
  }

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
                <div
                  key={resume.id}
                  className="resumes-card"
                  onClick={() => handleResumeClick(resume)}
                >
                  <span className="resumes-card-body"></span>
                  <span className="resumes-card-foot">{resume.title}</span>
                </div>
              ))}
            </div>
          </div>

          <aside id="seeker-resumes-3">
            <h2>Summary</h2>
            {selectedResume ? (
              <div>
                <h3>{selectedResume.title}</h3>
                <p>{selectedResume.description}</p>
                <h4>Requirements:</h4>
                <ul>
                  {selectedResume.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
                <h4>Responsibilities:</h4>
                <ul>
                  {selectedResume.responsibilities.map(
                    (responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <p>Please select a resume to view its details.</p>
            )}
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
