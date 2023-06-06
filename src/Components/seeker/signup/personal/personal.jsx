import SeekerSectionHeader from "../../ss-header/header";

export default function SignupSection1({sectionRefs, handleNextSection}) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Personal Details"}
          paragraph={
            "Please provide your personal information for the sake of identification "
          }
        />

        <div className="seeker-ss-conts-cont-text">
          <label>
            <p>First Name</p>
            <input placeholder="First Name" />
          </label>
          <label>
            <p>Second Name</p>
            <input type="text" placeholder="Second Name" />
          </label>

          <label>
            <p>Third Name</p>
            <input type="text" placeholder="Third Name" />
          </label>

          <label>
            <p>Phone Number</p>
            <input type="number" placeholder="Phone Number" />
          </label>

          <label>
            <p>Country of residence</p>
            <input type="text" placeholder="Country of residence" />
          </label>

          <label>
            <p>City of residence</p>
            <input type="text" placeholder="City of residence" />
          </label>
        </div>

        <div className="seeker-ss-conts-cont-custom">
          <label className="seeker-ss-customs">
            <p>Choose your gender</p>

            <span>
              <p>
                <input type="radio" name="gender" value="male" /> Male
              </p>
              <p>
                <input type="radio" name="gender" value="female" /> Female
              </p>
            </span>
          </label>

          <label className="seeker-ss-customs">
            <p>Upload profile image (JPEG, JPG)</p>
            <input type="file" accept="image/jpeg, image/jpg, image/png" />
          </label>

          <label className="seeker-ss-customs">
            <p>Upload your 3min video resume (MP4, MKV)</p>
            <input type="file" accept="video/mp4, video/mkv" />
          </label>

          <label className="seeker-ss-customs">
            <p>Upload your resume (PDF)</p>
            <input type="file" accept="application/pdf" />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Professional Summary"}
          paragraph={"Provide us with an overview of your career journey"}
        />

        <div className="seeker-ss-conts-cont-textarea">
          <label className="seeker-scc-textareas">
            <p>Your professional summary</p>
            <textarea maxLength="500" />
          </label>

          <label className="seeker-scc-textareas">
            <p>Your career objectives</p>
            <textarea maxLength="500" />
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
