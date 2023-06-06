import { useState, useRef } from "react";
import "./signup.css";
import SignupSection1 from "../../../Components/seeker/signup/personal/personal";
import SignupSection2 from "../../../Components/seeker/signup/technical/technical";
import SignupSection3 from "../../../Components/seeker/signup/education/education";
import SignupSection4 from "../../../Components/seeker/signup/projects/projects";
import SignupSection5 from "../../../Components/seeker/signup/work/work";
import SignupSection6 from "../../../Components/seeker/signup/professional/prof";
import SignupSection7 from "../../../Components/seeker/signup/other/other";

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

  return (
    <main id="seeker-signup" ref={mainRef}>
      <SignupHeader />
      {currentSection === 1 && (
        <SignupSection1
          sectionRefs={sectionRefs[0]}
          handleNextSection={handleNextSection}
        />
      )}
      {currentSection === 2 && (
        <SignupSection2
          sectionRefs={sectionRefs[1]}
          handleNextSection={handleNextSection}
        />
      )}
      {currentSection === 3 && (
        <SignupSection3
          sectionRefs={sectionRefs[2]}
          handleNextSection={handleNextSection}
        />
      )}
      {currentSection === 4 && (
        <SignupSection4
          sectionRefs={sectionRefs[3]}
          handleNextSection={handleNextSection}
        />
      )}
      {currentSection === 5 && (
        <SignupSection5
          sectionRefs={sectionRefs[4]}
          handleNextSection={handleNextSection}
        />
      )}
      {currentSection === 6 && (
        <SignupSection6
          sectionRefs={sectionRefs[5]}
          handleNextSection={handleNextSection}
        />
      )}
      {currentSection === 7 && (
        <SignupSection7
          sectionRefs={sectionRefs[6]}
          handleNextSection={handleNextSection}
        />
      )}
    </main>
  );
}
