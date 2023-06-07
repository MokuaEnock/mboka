import "./other.css";
import SeekerSectionHeader from "../../ss-header/header";

export default function SignupSection7({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Links to Socials"}
          paragraph={"Add links to your social media "}
        ></SeekerSectionHeader>

        <div className="seeker-ss3-cont">
          <label className="seeker-ss3-cont-items">
            <p>Linkedin Link:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Github Link:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Twitter Link:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Facebook Link:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Hackerank Link:</p>
            <input type="text" />
          </label>
        </div>
      </div>
      <div className="seeker-ss-buttons">
        <p></p>
        <button type="button" onClick={handleNextSection}>
          Complete
        </button>
      </div>
    </form>
  );
}
