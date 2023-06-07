import "./work.css";
import SeekerSectionHeader from "../../ss-header/header";

import { FaPlus } from "react-icons/fa";

export default function SignupSection5({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Overview"}
          paragraph={"Give us an overview of your role."}
        />
        <div className="seeker-ss3-cont">
          <label className="seeker-ss3-cont-items">
            <p>Company or Organization:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Job Title:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Start date:</p>
            <input type="date" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>End date:</p>
            <input type="date" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Industry/Sector:</p>
            <input type="text" />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Job Description"}
          paragraph={"Enter a detailed description of your role there."}
        />

        <div className="seeker-ss3-cont2">
          <label className="seeker-ss3-textarea">
            <p>A description of your job:</p>
            <textarea name="thesisDescription" />
          </label>

          <label className="seeker-ss3-textarea">
            <p>Your responsibilities:</p>
            <textarea name="thesisDescription" />
          </label>

          <label className="seeker-ss3-textarea">
            <p>Your achievements:</p>
            <textarea name="thesisDescription" />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Programming Languages"}
          paragraph={"Add the programming languages used."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Skills"}
          paragraph={"Add skills utilized in this role."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Technologies"}
          paragraph={"Add the technologies used in this role."}
        />
        <div></div>
      </div>
      <div className="seeker-ss-buttons">
        <p></p>
        <button type="submit" id="section-add-button">
          <FaPlus />
          <p>Add Experience</p>
        </button>
        <button type="button" onClick={handleNextSection}>
          Next
        </button>
      </div>
    </form>
  );
}
