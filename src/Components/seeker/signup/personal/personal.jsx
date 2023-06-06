import "./personal.css";
import SeekerSectionHeader from "../../ss-header/header";
import { useState } from "react";
import { data } from "jquery";

export default function SignupSection1({ sectionRefs, handleNextSection }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [objectives, setObjectives] = useState("");
  const [profileImage, setProfileImage] = useState();
  const [videoResume, setVideoResume] = useState("");
  const [resume, setResume] = useState("");
  const seekerId = localStorage.getItem("seekerId");
  console.log(seekerId);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      // seeker_detail: {
      seeker_id: seekerId,
      firstName,
      secondName,
      thirdName,
      phoneNumber,
      country,
      city,
      gender,
      professionalSummary,
      objectives,
      // },
    };

    console.log(formData);

    fetch("http://localhost:3000/seeker_details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <form
      className="seeker-signup-sections"
      ref={sectionRefs}
      onSubmit={handleSubmit}
    >
      <div className="seeker-ss-cont">
        <SeekerSectionHeader
          header={"Personal Details"}
          paragraph={
            "Please provide your personal information for the sake of identification"
          }
        />

        <div className="seeker-ss-conts-cont-text">
          <label>
            <p>First Name</p>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          <label>
            <p>Second Name</p>
            <input
              type="text"
              placeholder="Second Name"
              value={secondName}
              onChange={(event) => setSecondName(event.target.value)}
            />
          </label>

          <label>
            <p>Third Name</p>
            <input
              type="text"
              placeholder="Third Name"
              value={thirdName}
              onChange={(event) => setThirdName(event.target.value)}
            />
          </label>

          <label>
            <p>Phone Number</p>
            <input
              type="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>

          <label>
            <p>Country of residence</p>
            <input
              type="text"
              placeholder="Country of residence"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </label>

          <label>
            <p>City of residence</p>
            <input
              type="text"
              placeholder="City of residence"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </label>
        </div>

        <div className="seeker-ss-conts-cont-custom">
          <label className="seeker-ss-customs">
            <p>Choose your gender</p>
            <span>
              <p>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(event) => setGender(event.target.value)}
                />
                Male
              </p>
              <p>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(event) => setGender(event.target.value)}
                />
                Female
              </p>
            </span>
          </label>

          <label className="seeker-ss-customs">
            <p>Upload profile image (JPEG, JPG)</p>
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              onChange={(event) => setProfileImage(event.target.files[0])}
              name="profileImage"
            />
          </label>

          <label className="seeker-ss-customs">
            <p>Upload your 3min video resume (MP4, MKV)</p>
            <input
              type="file"
              accept="video/mp4, video/mkv"
              onChange={(event) => setVideoResume(event.target.files[0])}
              name="videoResume"
            />
          </label>

          <label className="seeker-ss-customs">
            <p>Upload your resume (PDF)</p>
            <input
              type="file"
              accept="application/pdf"
              onChange={(event) => setResume(event.target.files[0])}
              name="resume"
            />
          </label>
        </div>

        <SeekerSectionHeader
          header={"Professional Summary"}
          paragraph={"Provide us with an overview of your career journey"}
        />

        <div className="seeker-ss-conts-cont-textarea">
          <label className="seeker-scc-textareas">
            <p>Your professional summary</p>
            <textarea
              maxLength="500"
              value={professionalSummary}
              onChange={(event) => setProfessionalSummary(event.target.value)}
            />
          </label>

          <label className="seeker-scc-textareas">
            <p>Your career objectives</p>
            <textarea
              maxLength="500"
              value={objectives}
              onChange={(event) => setObjectives(event.target.value)}
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
