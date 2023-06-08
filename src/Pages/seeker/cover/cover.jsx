import "./cover.css";
import SeekerHeader from "../../../Components/seeker/header/header";

import { IoMdDownload } from "react-icons/io";

export default function SeekerCover() {
  function Container() {
    return (
      <main className="seeker">
        <section className="seeker-resumes">
          <aside id="seeker-cover-1">
            <span id="seeker-c1-header">Your Cover Letters</span>
            <div></div>
          </aside>

          <div id="seeker-cover-2">
            <div id="seeker-c2-cont">
              <div className="ai-chat"></div>
              <div className="human-chat"></div>
              <div className="ai-chat"></div>
              <div className="human-chat"></div>
            </div>
            <form id="seeker-c2-form">
              <input type="text" />
              <button>Send</button>
            </form>
          </div>

          <aside id="seeker-cover-3">
            <button>
              <IoMdDownload />
              <p>Cover Letter</p>
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
