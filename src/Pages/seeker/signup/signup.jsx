import { useState, useRef } from "react";
import "./signup.css";
import SeekerSectionHeader from "../../../Components/seeker/ss-header/header";

export default function SeekerSignup() {
  const [currentSection, setCurrentSection] = useState(1);
  const mainRef = useRef(null);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  function scrollToSection(sectionNumber) {
    setCurrentSection(sectionNumber);
    const sectionRef = sectionRefs[sectionNumber - 1];
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleNextSection() {
    const nextSection = currentSection + 1;
    if (nextSection <= sectionRefs.length) {
      scrollToSection(nextSection);
    }
  }

  function SignupHeader() {
    const headerSpans = [
      {
        section: 1,
        text: "Personal Details",
      },
      {
        section: 2,
        text: "Technical Skills",
      },
      {
        section: 3,
        text: "Education",
      },
      {
        section: 4,
        text: "Your Projects",
      },
      {
        section: 5,
        text: "Work Experience",
      },
      {
        section: 6,
        text: "Professional Courses",
      },
      {
        section: 7,
        text: "Other Details",
      },
    ];

    return (
      <div id="seeker-signup-header">
        <h3>Tell us about you</h3>
        <div>
          {headerSpans.map((headerSpan) => (
            <span
              key={headerSpan.section}
              className={`seeker-sh-span ${
                currentSection >= headerSpan.section ? "seeker-sh-span-2" : ""
              }`}
              onClick={() => scrollToSection(headerSpan.section)}
            >
              <p>{headerSpan.section}</p>
              <p>{headerSpan.text}</p>
            </span>
          ))}
        </div>
      </div>
    );
  }

  function SignupSection1() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[0]}>
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

  function SignupSection2() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[1]}>
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

  function SignupSection3() {
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

  function SignupSection4() {
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

  function SignupSection5() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[4]}>
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

  function SignupSection6() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[5]}>
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

  function SignupSection7() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[6]}>
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

  return (
    <main id="seeker-signup" ref={mainRef}>
      <SignupHeader />
      {currentSection === 1 && <SignupSection1 />}
      {currentSection === 2 && <SignupSection2 />}
      {currentSection === 3 && <SignupSection3 />}
      {currentSection === 4 && <SignupSection4 />}
      {currentSection === 5 && <SignupSection5 />}
      {currentSection === 6 && <SignupSection6 />}
      {currentSection === 7 && <SignupSection7 />}
    </main>
  );
}
