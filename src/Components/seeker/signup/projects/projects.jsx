import "./projects.css";

import SeekerSectionHeader from "../../ss-header/header";

export default function SignupSection4({sectionRefs, handleNextSection}) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs[3]}>
      <div className="seeker-ss-cont"></div>
      <div className="seeker-ss-buttons">
        <p></p>
        <button type="button" onClick={handleNextSection}>
          Save
        </button>
      </div>
    </form>
  );
}
