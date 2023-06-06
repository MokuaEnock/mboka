import SeekerSectionHeader from "../../ss-header/header";
import "./technical.css";
import { useState, useEffect } from "react";

export default function SignupSection2({ sectionRefs, handleNextSection }) {
  const [skills, setSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skillsRes, programmingRes, technologiesRes] = await Promise.all([
          fetch("http://localhost:3000/skills"),
          fetch("http://localhost:3000/programming_languages"),
          fetch("http://localhost:3000/technologies"),
        ]);

        if (!skillsRes.ok || !programmingRes.ok || !technologiesRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const [skillsData, programmingData, technologiesData] =
          await Promise.all([
            skillsRes.json(),
            programmingRes.json(),
            technologiesRes.json(),
          ]);

        setSkills(skillsData);
        setLanguages(programmingData);
        setTechnologies(technologiesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSpanClick = (id) => {
    const updatedSkills = skills.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      } else {
        return item;
      }
    });

    setSkills(updatedSkills);
  };

  return (
    <form className="seeker-signup-sections" ref={sectionRefs}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Skills"}
          paragraph={
            "Select skills that you are good at and you can actually do."
          }
        />
        <div className="seeker-ss2-cont1-1">
          {loading ? (
            <span>Loading skills...</span>
          ) : (
            skills.map((item) => (
              <label
                key={item.id}
                className={item.selected ? "selected-skill-item" : ""}
              >
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSpanClick(item.id)}
                  style={{ display: "none" }} // Hide the checkbox
                />
                {item.name}
              </label>
            ))
          )}
        </div>

        <SeekerSectionHeader
          header={"Technologies"}
          paragraph={
            "Select technologies that you have previously worked with."
          }
        />

        <div className="seeker-ss2-cont1">
          {loading ? (
            <span>Loading technologies...</span>
          ) : (
            technologies.map((item) => <span key={item.id}>{item.name}</span>)
          )}
        </div>

        <SeekerSectionHeader
          header={"Programming Languages"}
          paragraph={
            "Select all the programming languages that you can write code confidently in."
          }
        />

        <div className="seeker-ss2-cont1">
          {loading ? (
            <span>Loading languages...</span>
          ) : (
            languages.map((item) => <span key={item.id}>{item.name}</span>)
          )}
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
