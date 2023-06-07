import React, { useState } from "react";
import "./prof.css";
import SeekerSectionHeader from "../../ss-header/header";
import { FaPlus } from "react-icons/fa";

export default function SignupSection6({ sectionRefs, handleNextSection }) {
  const [institutionName, setInstitutionName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [degreeType, setDegreeType] = useState("");
  const [institutionType, setInstitutionType] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [major, setMajor] = useState("");
  const [certification, setCertification] = useState("");
  const [thesisDescription, setThesisDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      institution_name: institutionName,
      start_date: startDate,
      end_date: endDate,
      degree_type: degreeType,
      type_of_institution: institutionType,
      field_of_study: fieldOfStudy,
      specialization: major,
      certification_link: certification,
      description: thesisDescription,
    };

    console.log(formData);

    fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInstitutionName("");
        setStartDate("");
        setEndDate("");
        setDegreeType("");
        setInstitutionType("");
        setFieldOfStudy("");
        setMajor("");
        setCertification("");
        setThesisDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form className="seeker-signup-sections" ref={sectionRefs[5]}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Education Background"}
          paragraph={"Go into detail about your education background."}
        />

        <div className="seeker-ss3-cont">
          <label className="seeker-ss3-cont-items">
            <span>Institution Name:</span>
            <input
              type="text"
              name="institutionName"
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <span>Start Date:</span>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <span>End Date:</span>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <span>Degree Type:</span>
            <input
              type="text"
              name="degreeType"
              value={degreeType}
              onChange={(e) => setDegreeType(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <span>Type of Institution:</span>
            <input
              type="text"
              name="institutionType"
              value={institutionType}
              onChange={(e) => setInstitutionType(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Certification Link:</p>
            <input
              type="text"
              value={certification}
              onChange={(e) => setCertification(e.target.value)}
            />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Field of Study"}
          paragraph={"Tell us about your field of study or major"}
        />

        <div className="seeker-ss3-cont1">
          <label className="seeker-ss3-cont-items">
            <span>Enter your field of study:</span>
            <input
              type="text"
              name="fieldOfStudy"
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <span>Specialization:</span>
            <input
              type="text"
              name="major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </label>
        </div>

        <div className="seeker-ss3-cont2">
          <label className="seeker-ss3-textarea">
            <p>A description of your final thesis or project:</p>
            <textarea
              name="thesisDescription"
              value={thesisDescription}
              onChange={(e) => setThesisDescription(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="seeker-ss-buttons">
        <p></p>
        <button type="submit" id="section-add-button">
          <FaPlus />
          <p>Add Experience</p>
        </button>
        <button type="button" onClick={handleNextSection}>
          Save
        </button>
      </div>
    </form>
  );
}
