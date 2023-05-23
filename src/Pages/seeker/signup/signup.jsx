import React, { useState, useRef } from "react";
import "./signup.css";

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

  function SignupHeader() {
    return (
      <div id="seeker-signup-header">
        <h3>Tell us about you</h3>
        <div>
          <span className="seeker-sh-span" onClick={() => scrollToSection(1)}>
            <p>1</p>
            <p>Personal Details</p>
          </span>

          <span className="seeker-sh-span" onClick={() => scrollToSection(2)}>
            <p>2</p>
            <p>Technical Skills</p>
          </span>

          <span className="seeker-sh-span" onClick={() => scrollToSection(3)}>
            <p>3</p>
            <p>Education Background</p>
          </span>

          <span className="seeker-sh-span" onClick={() => scrollToSection(4)}>
            <p>4</p>
            <p>Your Projects</p>
          </span>

          <span className="seeker-sh-span" onClick={() => scrollToSection(5)}>
            <p>5</p>
            <p>Work Experience</p>
          </span>

          <span className="seeker-sh-span" onClick={() => scrollToSection(6)}>
            <p>6</p>
            <p>Professional Courses</p>
          </span>

          <span className="seeker-sh-span" onClick={() => scrollToSection(7)}>
            <p>7</p>
            <p>Other Details</p>
          </span>
        </div>
      </div>
    );
  }

  function SignupSection1() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[0]}>
        <p>This is signup section 1</p>
        <button type="button" onClick={() => scrollToSection(2)}>
          Save
        </button>
      </form>
    );
  }

  function SignupSection2() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[1]}>
        <p>This is signup section 2</p>
        <button type="button" onClick={() => scrollToSection(1)}>
          Save
        </button>
      </form>
    );
  }

  function SignupSection3() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[2]}>
        <p>This is signup section 3</p>
        <button type="button" onClick={() => scrollToSection(4)}>
          Save
        </button>
      </form>
    );
  }

  function SignupSection4() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[3]}>
        <p>This is signup section 4</p>
        <button type="button" onClick={() => scrollToSection(3)}>
          Save
        </button>
      </form>
    );
  }

  function SignupSection5() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[4]}>
        <p>This is signup section 5</p>
        <button type="button" onClick={() => scrollToSection(6)}>
          Save
        </button>
      </form>
    );
  }

  function SignupSection6() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[5]}>
        <p>This is signup section 6</p>
        <button type="button" onClick={() => scrollToSection(5)}>
          Save
        </button>
      </form>
    );
  }

  function SignupSection7() {
    return (
      <form className="seeker-signup-sections" ref={sectionRefs[6]}>
        <p>This is signup section 7</p>
        <button type="button" onClick={() => scrollToSection(7)}>
          Save
        </button>
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
