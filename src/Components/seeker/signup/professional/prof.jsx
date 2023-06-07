import "./prof.css";
import SeekerSectionHeader from "../../ss-header/header";

import { FaPlus } from "react-icons/fa";

export default function SignupSection6({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs[5]}>
      <div className="seeker-ss-cont"></div>
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
