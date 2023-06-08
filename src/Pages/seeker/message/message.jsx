import "./message.css";
import { useState } from "react";
import SeekerHeader from "../../../Components/seeker/header/header";

const conversations = [
  {
    id: 1,
    sender: "Recruiter1",
    receiver: "Candidate1",
    messages: [
      {
        content:
          "Hello Candidate1, thank you for your application. Can we schedule an interview?",
        timeSent: "2023-06-08T09:00:00",
        type: "sender",
      },
      {
        content:
          "Sure, I'm available on Thursday at 2 PM. How about a video call?",
        timeSent: "2023-06-08T09:05:00",
        type: "receiver",
      },
      {
        content:
          "That works for me. I will send you a meeting invite. Looking forward to speaking with you.",
        timeSent: "2023-06-08T09:10:00",
        type: "sender",
      },
    ],
  },
  {
    id: 2,
    sender: "Recruiter2",
    receiver: "Candidate2",
    messages: [
      {
        content:
          "Hi Candidate2, we reviewed your resume and would like to proceed with a technical assessment.",
        timeSent: "2023-06-08T10:30:00",
        type: "sender",
      },
      {
        content:
          "Great! Please let me know the details and any preparation I should do.",
        timeSent: "2023-06-08T10:35:00",
        type: "receiver",
      },
    ],
  },
  {
    id: 3,
    sender: "Recruiter3",
    receiver: "Candidate3",
    messages: [
      {
        content:
          "Hi Candidate3, we would like to invite you for an onsite interview next week.",
        timeSent: "2023-06-08T14:20:00",
        type: "sender",
      },
      {
        content:
          "That sounds great! Please provide me with the date, time, and location.",
        timeSent: "2023-06-08T14:25:00",
        type: "receiver",
      },
    ],
  },
  {
    id: 4,
    sender: "Recruiter4",
    receiver: "Candidate4",
    messages: [
      {
        content:
          "Hello Candidate4, we would like to discuss your salary expectations for the position.",
        timeSent: "2023-06-08T16:45:00",
        type: "sender",
      },
      {
        content:
          "Thank you for considering me. I'm open to discussing the salary based on the market standards.",
        timeSent: "2023-06-08T16:50:00",
        type: "receiver",
      },
      {
        content:
          "Understood. We will follow up with our offer soon. Have a great day!",
        timeSent: "2023-06-08T16:55:00",
        type: "sender",
      },
    ],
  },
  {
    id: 5,
    sender: "Recruiter5",
    receiver: "Candidate5",
    messages: [
      {
        content:
          "Hello Candidate5, we are impressed with your qualifications. Can we schedule a phone interview?",
        timeSent: "2023-06-08T19:30:00",
        type: "sender",
      },
      {
        content:
          "Certainly! Please let me know your availability, and I will be happy to arrange a call.",
        timeSent: "2023-06-08T19:35:00",
        type: "receiver",
      },
    ],
  },
];

export default function SeekerMessage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]?.id);
  const [currentPage, setCurrentPage] = useState(1);

  function Container() {
    function ReceiverChat({ message }) {
      return (
        <div className="receiver-chat">
          <p>{message}</p>
        </div>
      );
    }

    function SenderChat({ message }) {
      return (
        <div className="sender-chat">
          <p>{message}</p>
        </div>
      );
    }

    const handleChatClick = (id) => {
      setSelectedChat(id);
    };

    const handleNextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };

    const filteredConversations = conversations.slice(
      (currentPage - 1) * 5,
      currentPage * 5
    );

    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-message-1">
            <span id="seeker-message-header">Your Messages</span>
            <div id="seeker-message-cont">
              {filteredConversations.map((conversation) => (
                <span
                  className={`chat-container ${
                    conversation.id === selectedChat ? "selected" : ""
                  }`}
                  key={conversation.id}
                  onClick={() => handleChatClick(conversation.id)}
                >
                  {conversation.sender}
                </span>
              ))}
            </div>
            <div id="seeker-message-foot">
              <button disabled={currentPage === 1} onClick={handlePrevPage}>
                Back
              </button>
              <span>
                <p>{currentPage}</p>
                <p>{currentPage + 1}</p>
                <p>{currentPage + 2}</p>
              </span>
              <button
                disabled={currentPage * 3 >= conversations.length}
                onClick={handleNextPage}
              >
                Next
              </button>
            </div>
          </aside>

          <div id="seeker-message-2">
            <div id="seeker-m2-cont">
              {selectedChat && (
                <>
                  {conversations
                    .find((conversation) => conversation.id === selectedChat)
                    .messages.map((message, index) =>
                      message.type === "sender" ? (
                        <SenderChat key={index} message={message.content} />
                      ) : (
                        <ReceiverChat key={index} message={message.content} />
                      )
                    )}
                </>
              )}
            </div>

            <form id="seeker-m2-form">
              <input type="text" />
              <button type="submit">Send</button>
            </form>
          </div>

          <aside id="seeker-message-3">
            <span id="seeker-m3-header">Files Shared</span>
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
