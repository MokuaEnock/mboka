import React, { useState } from "react";
import "./work.css";
import SeekerSectionHeader from "../../ss-header/header";
import { FaPlus } from "react-icons/fa";

export default function SignupSection5({ sectionRefs, handleNextSection }) {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [industry, setIndustry] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [achievements, setAchievements] = useState("");
  const seeker_id = localStorage.getItem("seekerId");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      seeker_id,
      company,
      job_title: jobTitle,
      start_date: startDate,
      end_date: endDate,
      industry,
      description: jobDescription,
      responsibilities,
      achievements,
    };

    fetch("http://localhost:3000/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCompany("");
        setJobTitle("");
        setStartDate("");
        setEndDate("");
        setIndustry("");
        setJobDescription("");
        setResponsibilities("");
        setAchievements("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form className="seeker-signup-sections" ref={sectionRefs}>
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Overview"}
          paragraph={"Give us an overview of your role."}
        />
        <div className="seeker-ss3-cont">
          <label className="seeker-ss3-cont-items">
            <p>Company or Organization:</p>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Job Title:</p>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Start date:</p>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>End date:</p>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Industry/Sector:</p>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Job Description"}
          paragraph={"Enter a detailed description of your role there."}
        />

        <div className="seeker-ss3-cont2">
          <label className="seeker-ss3-textarea">
            <p>A description of your job:</p>
            <textarea
              name="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-textarea">
            <p>Your responsibilities:</p>
            <textarea
              name="responsibilities"
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-textarea">
            <p>Your achievements:</p>
            <textarea
              name="achievements"
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
            />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Programming Languages"}
          paragraph={"Add the programming languages used."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Skills"}
          paragraph={"Add skills utilized in this role."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Technologies"}
          paragraph={"Add the technologies used in this role."}
        />
        <div></div>
      </div>
      <div className="seeker-ss-buttons">
        <p></p>
        <button type="submit" id="section-add-button" onClick={handleSubmit}>
          <FaPlus />
          <p>Add Experience</p>
        </button>
        <button type="button" onClick={handleNextSection}>
          Next
        </button>
      </div>
    </form>
  );
}
