import "./projects.css";
import SeekerSectionHeader from "../../ss-header/header";

import { FaPlus } from "react-icons/fa";

export default function SignupSection4({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs[3]}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Project Overview"}
          paragraph={"Give us an overview of your project."}
        />
        <div className="seeker-ss3-cont">
          <label className="seeker-ss3-cont-items">
            <p>Project Name:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Category:</p>
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
            <p>Live link:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Project github link:</p>
            <input type="text" />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Project Description"}
          paragraph={"Enter a detailed description of your project."}
        />

        <div className="seeker-ss3-cont2">
          <label className="seeker-ss3-textarea">
            <p>A description of your project:</p>
            <textarea name="thesisDescription" />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Programming Languages"}
          paragraph={"Add the programming languages used."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Project Skills"}
          paragraph={"Add skills utilized in this project."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Project Technologies"}
          paragraph={"Add the technologies used in the project."}
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
          Save
        </button>
      </div>
    </form>
  );
}
