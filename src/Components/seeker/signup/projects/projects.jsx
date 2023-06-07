import React, { useState } from "react";
import "./projects.css";
import SeekerSectionHeader from "../../ss-header/header";
import { FaPlus } from "react-icons/fa";

export default function SignupSection4({ sectionRefs, handleNextSection }) {
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const seeker_id = localStorage.getItem("seekerId");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      seeker_id,
      project_name: projectName,
      category,
      start_date: startDate,
      end_date: endDate,
      live_link: liveLink,
      github_link: githubLink,
      description: projectDescription,
    };
    console.log(formData);
    fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from backend:", data);
        setProjectName("");
        setCategory("");
        setStartDate("");
        setEndDate("");
        setLiveLink("");
        setGithubLink("");
        setProjectDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form
      className="seeker-signup-sections"
      ref={sectionRefs[3]}
      onSubmit={handleSubmit}
    >
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Project Overview"}
          paragraph={"Give us an overview of your project."}
        />
        <div className="seeker-ss3-cont">
          <label className="seeker-ss3-cont-items">
            <p>Project Name:</p>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Category:</p>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            <p>Live link:</p>
            <input
              type="text"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
            />
          </label>

          <label className="seeker-ss3-cont-items">
            <p>Project github link:</p>
            <input
              type="text"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Project Description"}
          paragraph={"Enter a detailed description of your project."}
        />

        <div className="seeker-ss3-cont2">
          <label className="seeker-ss3-textarea">
            <p>A description of your project:</p>
            <textarea
              name="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Programming Languages"}
          paragraph={"Add the programming languages used."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Project Skills"}
          paragraph={"Add skills utilized in this project."}
        />

        <div></div>

        <SeekerSectionHeader
          header={"Project Technologies"}
          paragraph={"Add the technologies used in the project."}
        />
        <div></div>
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
