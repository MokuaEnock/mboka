import "./education.css";
import SeekerSectionHeader from "../../ss-header/header";

export default function SignupSection3({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs[2]}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Education Background"}
          paragraph={"Go into detail about your education background."}
        />

        <div className="seeker-ss3-cont">
          <label className="seeker-ss3-cont-items">
            <p>Institution Name:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Start Date:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>End Date:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Degree Type:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Location:</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Type of Institution:</p>
            <input type="text" />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Field of Study"}
          paragraph={"Tell us about your field of study or major"}
        ></SeekerSectionHeader>

        <div className="seeker-ss3-cont1">
          <label className="seeker-ss3-cont-items">
            <p>Enter your field of study</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Enter your Major</p>
            <input type="text" />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>GPA scored</p>
            <input type="number" />
          </label>
        </div>

        <div className="seeker-ss3-cont2">
          <label className="seeker-ss3-textarea">
            <p>A description of your final thesis or project</p>
            <textarea />
          </label>
        </div>
      </div>
      <div className="seeker-ss-buttons">
        <p></p>
        <button type="button" onClick={handleNextSection}>
          Save
        </button>
      </div>
    </form>
  );
}
