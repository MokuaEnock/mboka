import React, { useState } from "react";
import "./detail.css";
import CodeEditor from "../Editor/editor";

let questionsData = {
  questions: [
    {
      id: 1,
      title: "Reverse a String",
      description: "Write a function to reverse a given string.",
      difficulty: "Easy",
      category: "String Manipulation",
      exampleInput: "Hello World",
      exampleOutput: "dlroW olleH",
      testCases: [
        {
          input: "Hello World",
          output: "dlroW olleH",
        },
        {
          input: "OpenAI",
          output: "IAnepo",
        },
      ],
    },
    {
      id: 2,
      title: "Find Maximum Number",
      description: "Write a function to find the maximum number in an array.",
      difficulty: "Medium",
      category: "Array Manipulation",
      exampleInput: "[4, 7, 2, 9, 1]",
      exampleOutput: "9",
      testCases: [
        {
          input: "[4, 7, 2, 9, 1]",
          output: "9",
        },
        {
          input: "[3, 1, 8, 5]",
          output: "8",
        },
      ],
    },
    {
      id: 3,
      title: "Calculate Factorial",
      description:
        "Write a function to calculate the factorial of a given number.",
      difficulty: "Hard",
      category: "Mathematics",
      exampleInput: "5",
      exampleOutput: "120",
      testCases: [
        {
          input: "5",
          output: "120",
        },
        {
          input: "8",
          output: "40320",
        },
      ],
    },
  ],
};

export default function SeekerInterviewDetail() {
  const [selectedQuestion, setSelectedQuestion] = useState(
    questionsData.questions[0]
  );

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  console.log(selectedQuestion)
  return (
    <main className="interview-detail">
      <section id="seeker-detail-1">
        {questionsData.questions.map((question) => (
          <div
            key={question.id}
            className={`seeker-detail-question-card ${
              question === selectedQuestion ? "selected" : ""
            }`}
            onClick={() => handleQuestionClick(question)}
          >
            {question.title}
          </div>
        ))}
      </section>

      <section id="seeker-detail-2">
        <h3>{selectedQuestion.title}</h3>
        <div id="seeker-detail-2-cont">
          <p>{selectedQuestion.description}</p>

          <div>
            <h5>Example Input</h5>
            <p>{selectedQuestion.exampleInput}</p>
          </div>

          <div>
            <h5>Example Output</h5>
            <p>{selectedQuestion.exampleOutput}</p>
          </div>
        </div>
      </section>

      <section id="seeker-detail-3">
        <div id="seeker-detail-3-header">
          <h3></h3>
          <button>Submit</button>
        </div>
        <CodeEditor selectedQuestion={selectedQuestion}/>
      </section>
    </main>
  );
}
