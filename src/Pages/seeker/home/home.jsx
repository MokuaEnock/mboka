import React, { useState, useEffect } from "react";
import SeekerHeader from "../../../Components/seeker/header/header";
import SeekerSearch from "../../../Components/seeker/search/search";
import "./home.css";

let jobData = {
  jobs: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "ABC Tech Solutions",
      location: "San Francisco, CA",
      description:
        "We are seeking a highly skilled and experienced Senior Software Engineer to join our team. You will be responsible for designing, developing, and maintaining software applications. The ideal candidate should have expertise in multiple programming languages, strong problem-solving skills, and a deep understanding of software engineering principles.",
      responsibilities: [
        "Design, develop, and test software applications using various programming languages.",
        "Collaborate with cross-functional teams to gather requirements and deliver high-quality software solutions.",
        "Troubleshoot and debug software issues, and propose effective solutions.",
        "Conduct code reviews to ensure code quality and maintainability.",
        "Stay updated with the latest technologies and industry trends.",
      ],
      qualifications: [
        "Bachelor's or Master's degree in Computer Science or a related field.",
        "5+ years of experience in software development.",
        "Proficiency in multiple programming languages such as Java, C++, and Python.",
        "Strong problem-solving and analytical skills.",
        "Experience with Agile development methodologies.",
        "Excellent communication and teamwork abilities.",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "XYZ Web Solutions",
      location: "New York, NY",
      description:
        "We are looking for a skilled Frontend Developer to join our team and help us build innovative web applications. You will work closely with the design and backend development teams to implement user interfaces and enhance the overall user experience. The ideal candidate should have a strong command of frontend technologies, a keen eye for design, and a passion for creating intuitive user interfaces.",
      responsibilities: [
        "Develop responsive and interactive web applications using HTML, CSS, and JavaScript.",
        "Translate UI/UX designs into well-structured and maintainable code.",
        "Collaborate with backend developers to integrate frontend components with server-side logic.",
        "Optimize web applications for maximum speed and scalability.",
        "Ensure the technical feasibility of UI/UX designs.",
        "Stay updated with the latest frontend development trends and best practices.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or a related field.",
        "2+ years of experience in frontend development.",
        "Proficiency in HTML, CSS, and JavaScript.",
        "Experience with frontend frameworks such as React or Angular.",
        "Knowledge of responsive design principles.",
        "Understanding of version control systems (e.g., Git).",
      ],
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Data Analytics Co.",
      location: "Seattle, WA",
      description:
        "We are seeking a talented Data Scientist to join our data analytics team. As a Data Scientist, you will work on large datasets, apply advanced statistical and machine learning techniques, and derive valuable insights to drive business decisions. The ideal candidate should have a strong background in statistics, programming, and data analysis, along with a passion for solving complex problems using data-driven approaches.",
      responsibilities: [
        "Analyze large datasets to identify patterns, trends, and correlations.",
        "Develop and implement statistical models and machine learning algorithms.",
        "Collaborate with cross-functional teams to define data requirements and deliver actionable insights.",
        "Present findings and insights to stakeholders in a clear and concise manner.",
        "Continuously evaluate and improve the performance of statistical models.",
      ],
      qualifications: [
        "Master's or Ph.D. degree in a quantitative field such as Statistics, Mathematics, or Computer Science.",
        "3+ years of experience as a Data Scientist or in a similar role.",
        "Strong programming skills in languages such as Python or R.",
        "Experience with statistical analysis, machine learning, and data visualization techniques.",
        "Proficiency in SQL and working with relational databases.",
        "Excellent problem-solving and critical thinking abilities.",
      ],
    },
    {
      id: 4,
      title: "Cloud Solutions Architect",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      description:
        "We are looking for a highly skilled Cloud Solutions Architect to design and implement scalable and secure cloud-based solutions. In this role, you will work closely with clients to understand their requirements and architect cloud solutions that meet their business needs. The ideal candidate should have a strong background in cloud technologies, excellent problem-solving skills, and a solid understanding of enterprise architecture principles.",
      responsibilities: [
        "Collaborate with clients to understand their business requirements and propose suitable cloud architectures.",
        "Design, implement, and deploy scalable and secure cloud-based solutions on platforms such as AWS, Azure, or Google Cloud.",
        "Ensure the availability, performance, and reliability of cloud infrastructure and applications.",
        "Provide technical guidance and support to development teams during the implementation of cloud solutions.",
        "Stay updated with the latest cloud technologies and best practices.",
      ],
      qualifications: [
        "Bachelor's or Master's degree in Computer Science or a related field.",
        "5+ years of experience in cloud architecture or a related role.",
        "Strong understanding of cloud computing concepts and services.",
        "Experience with cloud platforms such as AWS, Azure, or Google Cloud.",
        "Proficiency in scripting languages (e.g., Python, Bash).",
        "Familiarity with containerization technologies (e.g., Docker, Kubernetes).",
      ],
    },
    {
      id: 5,
      title: "Cybersecurity Analyst",
      company: "SecureNet Solutions",
      location: "Washington, D.C.",
      description:
        "We are seeking a skilled Cybersecurity Analyst to join our team and help ensure the security of our organization's systems and data. In this role, you will conduct security assessments, monitor network traffic, and investigate security incidents. The ideal candidate should have a strong background in cybersecurity, knowledge of industry standards and best practices, and a proactive approach to identifying and mitigating security risks.",
      responsibilities: [
        "Conduct vulnerability assessments and penetration testing to identify security weaknesses.",
        "Monitor network traffic and security logs for suspicious activities or potential threats.",
        "Investigate and respond to security incidents, and implement appropriate remediation measures.",
        "Develop and maintain cybersecurity policies, procedures, and guidelines.",
        "Stay updated with the latest cybersecurity threats and mitigation techniques.",
      ],
      qualifications: [
        "Bachelor's degree in Cybersecurity, Information Security, or a related field.",
        "3+ years of experience in cybersecurity or a related role.",
        "Strong knowledge of network security concepts and technologies.",
        "Experience with security assessment tools and techniques.",
        "Understanding of regulatory requirements and industry standards (e.g., GDPR, ISO 27001).",
        "Certifications such as CISSP, CEH, or CISM are preferred.",
      ],
    },
  ],
};

const ITEMS_PER_PAGE = 5;

export default function SeekerHome() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating job data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const totalJobs = jobData.jobs.length;
    const totalPages = Math.ceil(totalJobs / ITEMS_PER_PAGE);
    setTotalPages(totalPages);

    // Select the first job by default
    setSelectedJob(jobData.jobs[0]);
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getVisibleJobs = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return jobData.jobs.slice(startIndex, endIndex);
  };

  return (
    <>
      <SeekerHeader />
      <SeekerSearch />
      <main className="seeker">
        <section className="seeker-home">
          <div id="seeker-home-1">
            <div className="seeker-home-cont-info">
              {isLoading ? (
                <div className="loading-spinner">Loading...</div>
              ) : (
                getVisibleJobs().map((job) => (
                  <div
                    key={job.id}
                    className={`seeker-job-card ${
                      job === selectedJob ? "selected" : ""
                    }`}
                    onClick={() => handleJobClick(job)}
                  >
                    <h4>{job.title}</h4>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                  </div>
                ))
              )}
            </div>
            <div className="seeker-home-cont-foot">
              <button disabled={currentPage === 1} onClick={handlePreviousPage}>
                Back
              </button>
              <span>
                <p>{currentPage}</p>
                <p>/</p>
                <p>{totalPages}</p>
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
              >
                Next
              </button>
            </div>
          </div>
          {selectedJob && (
            <div id="seeker-home-2">
              <div id="seeker-home-2-head">
                <h3>{selectedJob.title}</h3>
                <span>
                  <p>Applicants: 35</p>
                  <p>Suitability: 6.5</p>
                  <p>Your Rank: 19</p>
                </span>
              </div>
              <div id="seeker-home-2-body">
                <div id="seeker-h2b-attrs">
                  <span>
                    <h5>{selectedJob.company}</h5>
                    <i>{selectedJob.location}</i>
                  </span>

                  <span>
                    <p>Remote</p>
                    <p>Mid-Level</p>
                    <p>Salary Range</p>
                  </span>
                </div>

                <h4>Description</h4>
                <p id="seeker-h2b-description">{selectedJob.description}</p>
                <h4>Responsibilities</h4>
                <ul>
                  {selectedJob.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                <h4>Qualifications</h4>
                <ul>
                  {selectedJob.qualifications.map((qualification) => (
                    <li key={qualification}>{qualification}</li>
                  ))}
                </ul>
              </div>
              <div id="seeker-home-2-foot">
                <p></p>
                <button>Apply</button>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
