import "./message.css";
import { useState } from "react";
import SeekerHeader from "../../../Components/seeker/header/header";

const conversations = [
  {
    id: 1,
    sender: "John",
    receiver: "Alice",
    messages: [
      {
        content: "Hey Alice, how have you been?",
        timeSent: "2023-06-08T09:00:00",
        type: "sender",
      },
      {
        content: "I've been good, thanks! How about you?",
        timeSent: "2023-06-08T09:05:00",
        type: "receiver",
      },
      {
        content: "I'm doing great. Do you want to catch up sometime?",
        timeSent: "2023-06-08T09:10:00",
        type: "sender",
      },
    ],
  },
  {
    id: 2,
    sender: "Emily",
    receiver: "Mark",
    messages: [
      {
        content: "Hi Mark, did you receive my email?",
        timeSent: "2023-06-08T10:30:00",
        type: "sender",
      },
      {
        content: "Yes, I did. I'll get back to you soon.",
        timeSent: "2023-06-08T10:35:00",
        type: "receiver",
      },
    ],
  },
  {
    id: 3,
    sender: "Sarah",
    receiver: "David",
    messages: [
      {
        content: "David, can we discuss the project tomorrow?",
        timeSent: "2023-06-08T14:20:00",
        type: "sender",
      },
      {
        content: "Sure, let's meet at 2 PM in the conference room.",
        timeSent: "2023-06-08T14:25:00",
        type: "receiver",
      },
    ],
  },
  {
    id: 4,
    sender: "Lisa",
    receiver: "Michael",
    messages: [
      {
        content: "Hey Michael, how was your trip?",
        timeSent: "2023-06-08T16:45:00",
        type: "sender",
      },
      {
        content: "It was fantastic! I had a great time.",
        timeSent: "2023-06-08T16:50:00",
        type: "receiver",
      },
      {
        content: "That's awesome. I would love to hear more about it.",
        timeSent: "2023-06-08T16:55:00",
        type: "sender",
      },
    ],
  },
  {
    id: 5,
    sender: "Alex",
    receiver: "Sophia",
    messages: [
      {
        content: "Sophia, are you free this weekend?",
        timeSent: "2023-06-08T19:30:00",
        type: "sender",
      },
      {
        content: "Yes, I don't have any plans. What's up?",
        timeSent: "2023-06-08T19:35:00",
        type: "receiver",
      },
    ],
  },
];

export default function SeekerMessage() {
  const [selectedChat, setSelectedChat] = useState(null);

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

    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-message-1">
            <span id="seeker-message-header">Your Messages</span>
            <div id="seeker-message-cont">
              {conversations.map((conversation) => (
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
              <button>Back</button>
              <span>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </span>
              <button>Next</button>
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

          <aside id="seeker-message-3"></aside>
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
