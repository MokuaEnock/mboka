import "./education.css";
import SeekerSectionHeader from "../../ss-header/header";

export default function SignupSection3({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs[2]}>
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
