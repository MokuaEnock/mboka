import React, { useState, useRef } from "react";
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
        text: "Education Background",
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
              "Please provide your personal information information for the sake of identification "
            }
          />

          <div className="seeker-ss-conts">
            <span className="seeker-ss-conts-cont"></span>
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
