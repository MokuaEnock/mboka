import React, { useState } from "react";
import SeekerHeader from "../../../Components/seeker/header/header";
import "./interviews.css";
import { Link } from "react-router-dom";

let interviewsData = [
  {
    id: 1,
    heading: "Item 1",
    text: "This is the text for Item 1.",
  },
  {
    id: 2,
    heading: "Item 2",
    text: "This is the text for Item 2.",
  },
  {
    id: 3,
    heading: "Item 3",
    text: "This is the text for Item 3.",
  },
  {
    id: 4,
    heading: "Item 4",
    text: "This is the text for Item 4.",
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
              <h3>Your Interviews</h3>
              <button>Filter By</button>
            </span>
            <div id="seeker-cont1-body">
              {interviewsData.map((interview) => (
                <div
                  className="seeker-interview-card"
                  key={interview.id}
                  onClick={() => handleInterviewClick(interview)}
                >
                  <h4>{interview.heading}</h4>
                  <p>{interview.text}</p>
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
              <p>{selectedInterview.text}</p>
            </div>
            <div id="seeker-cont2-foot">
              <Link>Mock Test</Link>
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
