import React, { useState } from "react";
import "./education.css";
import SeekerSectionHeader from "../../ss-header/header";

export default function SignupSection3({ sectionRefs, handleNextSection }) {
  const [institutionName, setInstitutionName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [degreeType, setDegreeType] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [institutionType, setInstitutionType] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState(0);
  const [thesisDescription, setThesisDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields here if needed

    const formData = {
      institutionName,
      startDate,
      endDate,
      degreeType,
      country,
      city,
      institutionType,
      fieldOfStudy,
      major,
      gpa,
      thesisDescription,
    };

    console.log("Form Data:", formData);

    // Perform any further actions with the form data...

    // Call the next section handler or perform any other actions
    handleNextSection();
  };

  return (
    <form
      className="seeker-signup-sections"
      ref={sectionRefs[2]}
      onSubmit={handleSubmit}
    >
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
            <span>Country:</span>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <span>City:</span>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
            <span>Enter your Major:</span>
            <input
              type="text"
              name="major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <span>GPA scored:</span>
            <input
              type="number"
              name="gpa"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
            />
          </label>
        </div>

        <div className="seeker-ss3-cont2">
          <label className="seeker-ss3-textarea">
            <span>A description of your final thesis or project:</span>
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
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
