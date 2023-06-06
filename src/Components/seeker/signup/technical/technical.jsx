import SeekerSectionHeader from "../../ss-header/header";
import "./technical.css";

export default function SignupSection2({ sectionRefs, handleNextSection }) {
  return (
    <form className="seeker-signup-sections" ref={sectionRefs}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Skills"}
          paragraph={
            "Select skills that you are good at and you can actually do."
          }
        />
        <div className="seeker-ss2-cont1">
          <button>Machine Learning</button>
          <button>Machine Learning</button>
          <button>Machine Learning</button>
          <button>Statistical Analysis</button>
          <button>Machine Learning</button>
          <button>Data Visualization</button>
          <button>Data Analysis</button>
          <button>Machine Learning</button>
          <button>Machine Learning</button>
          <button>Machine Learning</button>
          <button>Machine Learning</button>
          <button>Cloud Engineering</button>
        </div>

        <SeekerSectionHeader
          header={"Technologies"}
          paragraph={
            "Select technologies that you have previously worked with."
          }
        />

        <div className="seeker-ss2-cont1">
          <button>Vs Code</button>
          <button>Jupyter Notebook</button>
          <button>Conda</button>
          <button>Pytorch</button>
          <button>TensorFlow</button>
          <button>SkLearn</button>
          <button>SkLearn</button>
          <button>SkLearn</button>
          <button>SkLearn</button>
          <button>SkLearn</button>
          <button>SkLearn</button>
          <button>Google Cloud</button>
        </div>

        <SeekerSectionHeader
          header={"Programming Languages"}
          paragraph={
            "Select all the programming languages that you can write code confidently in."
          }
        />

        <div className="seeker-ss2-cont1">
          <button>Python</button>
          <button>Ruby</button>
          <button>C</button>
          <button>C++</button>
          <button>C#</button>
          <button>Java</button>
          <button>JavaScript</button>
          <button>Kotlin</button>
          <button>Rust</button>
          <button>Cobal</button>
          <button>Go</button>
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
