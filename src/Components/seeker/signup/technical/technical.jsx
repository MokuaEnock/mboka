import SeekerSectionHeader from "../../ss-header/header";
import "./technical.css";

import { useState } from "react";

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
          <span>Machine Learning</span>
          <span>Machine Learning</span>
          <span>Machine Learning</span>
          <span>Statistical Analysis</span>
          <span>Machine Learning</span>
          <span>Data Visualization</span>
          <span>Data Analysis</span>
          <span>Machine Learning</span>
          <span>Machine Learning</span>
          <span>Machine Learning</span>
          <span>Machine Learning</span>
          <span>Cloud Engineering</span>
        </div>

        <SeekerSectionHeader
          header={"Technologies"}
          paragraph={
            "Select technologies that you have previously worked with."
          }
        />

        <div className="seeker-ss2-cont1">
          <span>Vs Code</span>
          <span>Jupyter Notebook</span>
          <span>Conda</span>
          <span>Pytorch</span>
          <span>TensorFlow</span>
          <span>SkLearn</span>
          <span>SkLearn</span>
          <span>SkLearn</span>
          <span>SkLearn</span>
          <span>SkLearn</span>
          <span>SkLearn</span>
          <span>Google Cloud</span>
        </div>

        <SeekerSectionHeader
          header={"Programming Languages"}
          paragraph={
            "Select all the programming languages that you can write code confidently in."
          }
        />

        <div className="seeker-ss2-cont1">
          <span>Python</span>
          <span>Ruby</span>
          <span>C</span>
          <span>C++</span>
          <span>C#</span>
          <span>Java</span>
          <span>JavaScript</span>
          <span>Kotlin</span>
          <span>Rust</span>
          <span>Cobal</span>
          <span>Go</span>
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
