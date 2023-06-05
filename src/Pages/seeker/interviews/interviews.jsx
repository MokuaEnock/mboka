import { useState } from "react";
import SeekerHeader from "../../../Components/seeker/header/header";
import "./interviews.css";
import { Link } from "react-router-dom";

let interviewsData = [
  {
    id: 1,
    company: "XYZ Tech",
    position: "Software Developer",
    candidate: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      resume: "https://example.com/resume/janesmith.pdf",
      github: "https://github.com/janesmith",
    },
    instructions:
      "Congratulations on passing the initial screening phase! We would like to invite you for an online live coding session at XYZ Tech. Please review the following details and come prepared:",
    interviewDetails: {
      date: "2023-06-20",
      time: "2:00 PM",
      platform: "Zoom",
    },
    techRole: true,
    liveCoding: {
      instructions:
        "During the live coding session, you will be required to solve a coding problem. Please make sure you have access to a stable internet connection and a development environment with your preferred programming language.",
      problemDescription:
        "You will be given a task to implement a function that checks whether a given string is a palindrome. The function should return true if the input string is a palindrome and false otherwise. Please be prepared to explain your code and provide test cases.",
      timeLimit: "60 minutes",
    },
    additionalInfo:
      "Prior to the session, we will send you a meeting invitation with the Zoom meeting link. If you have any questions or need to reschedule, please contact us at interview@xyztech.com.",
  },
  {
    id: 2,
    company: "ABC Solutions",
    position: "Full Stack Developer",
    candidate: {
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      phone: "555-123-4567",
      resume: "https://example.com/resume/mikejohnson.pdf",
      github: "https://github.com/mikejohnson",
    },
    instructions:
      "Congratulations on successfully completing the initial screening phase! We are pleased to invite you for an online live coding session at ABC Solutions. Please review the following details:",
    interviewDetails: {
      date: "2023-06-25",
      time: "4:00 PM",
      platform: "Google Meet",
    },
    techRole: true,
    liveCoding: {
      instructions:
        "During the live coding session, you will be given a coding problem related to building RESTful APIs. You are required to implement a basic API for a blog post application using your preferred programming language and framework.",
      problemDescription:
        "The API should have endpoints for creating, reading, updating, and deleting blog posts. It should also support authentication and authorization. Please be prepared to explain your code and demonstrate your understanding of RESTful principles.",
      timeLimit: "90 minutes",
    },
    additionalInfo:
      "We will send you a meeting invitation with the Google Meet link before the session. If you have any questions or need any assistance, please contact us at interview@abcsolutions.com.",
  },
  {
    id: 3,
    company: "Tech Innovators",
    position: "Cloud Architect",
    candidate: {
      name: "Sarah Thompson",
      email: "sarah.thompson@example.com",
      phone: "111-222-3333",
      resume: "https://example.com/resume/sarahthompson.pdf",
      github: "https://github.com/sarahthompson",
    },
    instructions:
      "Congratulations on advancing to the next stage of the selection process! We invite you for an online live coding session at Tech Innovators. Please review the following details:",
    interviewDetails: {
      date: "2023-06-30",
      time: "11:00 AM",
      platform: "Microsoft Teams",
    },
    techRole: true,
    liveCoding: {
      instructions:
        "During the live coding session, you will be presented with a coding challenge related to algorithm design and problem-solving. The challenge will require you to optimize a given algorithm or implement a specific algorithm based on the problem description.",
      problemDescription:
        "The challenge will be focused on graph algorithms and their applications. Please make sure you are comfortable with fundamental graph algorithms like breadth-first search, depth-first search, and Dijkstra's algorithm.",
      timeLimit: "120 minutes",
    },
    additionalInfo:
      "A meeting invitation with the Microsoft Teams link will be sent to you prior to the session. If you have any questions or need further information, please contact us at interview@techinnovators.com.",
  },
  {
    id: 4,
    company: "Kilimo Africa",
    position: "Machine Learning Engineer",
    candidate: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      resume: "https://example.com/resume/johndoe.pdf",
      github: "https://github.com/johndoe",
    },
    instructions:
      "Congratulations on passing the initial screening phase! We would like to invite you for an interview at ABC Tech. Please review the following details and come prepared:",
    interviewDetails: {
      date: "2023-06-15",
      time: "10:00 AM",
      location: "ABC Tech Headquarters, 123 Main St, City, State",
    },
    techRole: true,
    codeChallenge: {
      instructions:
        "As part of the interview, you will be required to complete a coding challenge. Please find the instructions and coding resources at the following link:",
      challengeLink: "https://example.com/coding-challenge",
    },
    additionalInfo:
      "Please bring a valid photo ID for security purposes. If you have any questions or need to reschedule, please contact us at interview@abctech.com.",
  },
];

export default function SeekerInterviews() {
  const [selectedInterview, setSelectedInterview] = useState(interviewsData[0]);

  function Container() {
    const handleInterviewClick = (interview) => {
      setSelectedInterview(interview);
    };

    return (
      <main className="seeker">
        <section className="seeker-interview">
          <div id="seeker-cont1">
            <span id="seeker-cont1-head">
              <h3>All Interviews</h3>
              <button>Filter By</button>
            </span>
            <div id="seeker-cont1-body">
              {interviewsData.map((interview) => (
                <div
                  className="seeker-interview-card"
                  key={interview.id}
                  onClick={() => handleInterviewClick(interview)}
                >
                  <h4>{interview.company}</h4>
                  <p>{interview.position}</p>
                </div>
              ))}
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

          <article id="seeker-cont2">
            <div id="seeker-cont2-head">
              <h3>{selectedInterview.heading}</h3>
              <h5>Time: 90 mins</h5>
              <h5>Passmark: 80%</h5>
            </div>
            <div id="seeker-cont2-body">
              <h2>{selectedInterview.company}</h2>
              <h6>{selectedInterview.position}</h6>
              <p>{selectedInterview.instructions}</p>
              {/* <p>{selectedInterview}</p> */}
            </div>
            <div id="seeker-cont2-foot">
              <p></p>
              <Link to={`/seeker/interviews/${selectedInterview.id}`}>
                Start Test
              </Link>
            </div>
          </article>
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
