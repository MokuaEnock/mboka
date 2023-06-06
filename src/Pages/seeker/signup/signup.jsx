import { useState, useRef } from "react";
import "./signup.css";
import SeekerSectionHeader from "../../../Components/seeker/ss-header/header";
import SignupSection1 from "../../../Components/seeker/signup/personal/personal";

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

  function SignupSection2() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[1]}>
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
      {currentSection === 1 && (
        <SignupSection1
          sectionRefs={sectionRefs[0]}
          handleNextSection={handleNextSection}
        />
      )}
      {currentSection === 2 && <SignupSection2 />}
      {currentSection === 3 && <SignupSection3 />}
      {currentSection === 4 && <SignupSection4 />}
      {currentSection === 5 && <SignupSection5 />}
      {currentSection === 6 && <SignupSection6 />}
      {currentSection === 7 && <SignupSection7 />}
    </main>
  );
}
