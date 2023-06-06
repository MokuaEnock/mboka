import "./other.css";
import SeekerSectionHeader from "../../ss-header/header";

export default function SignupSection7({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs}>
      <div className="seeker-ss-cont"></div>
      <div className="seeker-ss-buttons">
        <p></p>
        <button type="button" onClick={handleNextSection}>
          Complete
        </button>
      </div>
    </form>
  );
}