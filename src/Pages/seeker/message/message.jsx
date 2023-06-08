import "./message.css";
import SeekerHeader from "../../../Components/seeker/header/header";

export default function SeekerMessage() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-message-1">
            <span id="seeker-message-header">Your Messages</span>
            <div id="seeker-message-cont">
              <span className="chat-container"></span>
              <span className="chat-container"></span>
              <span className="chat-container"></span>
              <span className="chat-container"></span>
              <span className="chat-container"></span>
              <span className="chat-container"></span>
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
              <div className="sender-chat">
                <p>Hello, how have you been. Where do you stay</p>
              </div>
              <div className="receiver-chat">
                <p>
                  Hello is stay in Nairobi where do stay where can we meet when
                  do we meet how do we meet
                </p>
              </div>
              <div className="sender-chat">
                <p>Hello, how have you been. Where do you stay</p>
              </div>
              <div className="sender-chat">
                <p>Where do you stay</p>
              </div>
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
