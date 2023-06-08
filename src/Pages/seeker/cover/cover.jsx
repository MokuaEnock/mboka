import "./cover.css";
import SeekerHeader from "../../../Components/seeker/header/header";

import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";

export default function SeekerCover() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-cover-1">
            <span id="seeker-c1-header">Your Cover Letters</span>
            <p>Data Science</p>
            <p>Data Analyst</p>
            <p>Machine Learning</p>
          </aside>

          <div id="seeker-cover-2">
            <div id="seeker-c2-cont">
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
            <form id="seeker-c2-form">
              <input type="text" />
              <button>Send</button>
            </form>
          </div>

          <aside id="seeker-cover-3">
            <button>
              <FaEye />
              <p>Preview</p>
            </button>

            <button>
              <IoMdDownload />
              <p>Download</p>
            </button>
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
