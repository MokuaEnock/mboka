import { useState } from "react";
import "./detail.css";
import CodeEditor from "../Editor/editor";

let questionsData = {
  questions: [
    {
      title: "Palindrome Check",
      description:
        "Write a function that takes a string as input and determines whether it is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.",
      expected_input: "A string",
      expected_output:
        "A boolean indicating whether the input string is a palindrome or not",
      sample_input: "'racecar'",
      sample_output: "true",
    },
    {
      title: "FizzBuzz",
      description:
        "Write a program that prints the numbers from 1 to n. But for multiples of three, print 'Fizz' instead of the number, and for the multiples of five, print 'Buzz'. For numbers which are multiples of both three and five, print 'FizzBuzz'.",
      expected_input: "An integer n",
      expected_output:
        "Print the numbers from 1 to n, following the FizzBuzz rules",
      sample_input: "15",
      sample_output:
        "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
    },
    {
      title: "Binary Tree Traversal",
      description:
        "Implement the three main methods for traversing a binary tree: pre-order, in-order, and post-order. You can assume the existence of a BinaryNode class with the properties 'value', 'left', and 'right'.",
      expected_input: "A binary tree",
      expected_output:
        "Print the values of the binary tree in the specified traversal order",
      sample_input: "BinaryNode.new(1, BinaryNode.new(2), BinaryNode.new(3))",
      sample_output: "Pre-order: 1 2 3\nIn-order: 2 1 3\nPost-order: 2 3 1",
    },
    {
      title: "Stack Implementation",
      description:
        "Implement a stack data structure with the following operations: push, pop, and peek. The stack should support storing any type of element.",
      expected_input: "Stack operations",
      expected_output: "The corresponding results of the operations",
      sample_input: "push(1), push(2), pop(), push(3), peek()",
      sample_output:
        "After push(1): [1]\nAfter push(2): [1, 2]\nAfter pop(): [1]\nAfter push(3): [1, 3]\nAfter peek(): 3",
    },
    {
      title: "Matrix Transposition",
      description:
        "Write a function that takes an n x m matrix as input and returns its transpose, where the rows and columns are swapped.",
      expected_input: "An n x m matrix",
      expected_output: "The transposed matrix",
      sample_input: "[[1, 2, 3], [4, 5, 6]]",
      sample_output: "[[1, 4], [2, 5], [3, 6]]",
    },
    {
      title: "Linked List Cycle Detection",
      description: "Given a linked list, determine if it has a cycle in it.",
      expected_input: "A linked list",
      expected_output:
        "A boolean indicating whether the linked list has a cycle or not",
      sample_input: "LinkedList.new(1, LinkedList.new(2, LinkedList.new(3)))",
      sample_output: "false",
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

  console.log(selectedQuestion);
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
            <p>{selectedQuestion.expected_input}</p>
            <p>{selectedQuestion.sample_input}</p>
          </div>

          <div>
            <h5>Example Output</h5>
            <p>{selectedQuestion.expected_output}</p>
            <p>{selectedQuestion.sample_output}</p>
          </div>
        </div>
      </section>

      <section id="seeker-detail-3">
        <div id="seeker-detail-3-header">
          <h3></h3>
          <button>Submit</button>
        </div>
        <CodeEditor selectedQuestion={selectedQuestion} />
      </section>
    </main>
  );
}
