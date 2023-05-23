import React, { useState } from "react";
import SeekerHeader from "../../../Components/seeker/header/header";
import "./profile.css";

export default function SeekerProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleImageChange(event) {
    const file = event.target.files[0];
    setSelectedImage(file);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("avatar", selectedImage);
    formData.append("first_name", firstName);
    formData.append("second_name", secondName);
    formData.append("third_name", thirdName);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("country", country);
    formData.append("nationality", nationality);
    formData.append("phone_number", phoneNumber);

    // Grab seeker_id from localStorage
    const seekerId = localStorage.getItem("seeker_id");
    formData.append("seeker_id", seekerId); // Append seeker_id to form data

    console.log(formData);

    fetch("http://127.0.0.1:3000/seeker_details", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response data
      })
      .catch((error) => {
        console.error(error); // Handle any errors
      });
  }

  return (
    <>
      <SeekerHeader />
      <main className="seeker-profile-cont">
        <section id="seeker-profile-cont">
          <section id="seeker-profile-navigation"></section>
          <form id="seeker-profile-main" onSubmit={handleFormSubmit} encType="multipart/form-data">
            <div id="seeker-pm-1">
              <h3>Profile Completeness</h3>
              <progress id="profile-progress" value="0" max="100"></progress>
            </div>

            <div id="seeker-pm-2">
              <span>
                <p>Upload your profile Image</p>
                <img
                  src={selectedImage ? URL.createObjectURL(selectedImage) : ""}
                  alt="profile"
                />
                <input type="file" onChange={handleImageChange} />
              </span>
              <span>
                <label>
                  <p>First Name</p>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="First Name"
                  />
                </label>

                <label>
                  <p>Second Name</p>
                  <input
                    type="text"
                    name="secondName"
                    value={secondName}
                    onChange={(event) => setSecondName(event.target.value)}
                    placeholder="Second Name"
                  />
                </label>

                <label>
                  <p>Last Name</p>
                  <input
                    type="text"
                    name="lastName"
                    value={thirdName}
                    onChange={(event) => setThirdName(event.target.value)}
                    placeholder="Last Name"
                  />
                </label>

                <label>
                  <p>Gender</p>
                  <select
                    name="gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option disabled value="">
                      Select your gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>

                <label>
                  <p>Date of birth</p>
                  <input
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                  />
                </label>

                <label>
                  <p>Country</p>
                  <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    placeholder="Country"
                  />
                </label>

                <label>
                  <p>Nationality</p>
                  <input
                    type="text"
                    name="nationality"
                    value={nationality}
                    onChange={(event) => setNationality(event.target.value)}
                    placeholder="Nationality"
                  />
                </label>

                <label>
                  <p>Phone Number</p>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    placeholder="Phone Number"
                  />
                </label>
              </span>
            </div>

            <button type="submit">Upload Information</button>
          </form>
        </section>
      </main>
    </>
  );
}
