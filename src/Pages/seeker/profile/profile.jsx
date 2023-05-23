import SeekerHeader from "../../../Components/seeker/header/header";
import "./profile.css";

export default function SeekerProfile() {
  function Profile() {
    return (
      <main className="seeker-profile-cont">
        <section id="seeker-profile-cont">
          <section id="seeker-profile-navigation"></section>
          <form id="seeker-profile-main">
            <div id="seeker-pm-1">
              <h3>Profile Completeness</h3>

              <progress id="profile-progress" value="0" max="100"></progress>
            </div>

            <div id="seeker-pm-2">
              <span>
                <p>Upload your profile Image</p>
                <img src="#" alt="profile" />
                <input type="file" />
              </span>
              <span>
                <label>
                  <p>First Name</p>
                  <input type="text" placeholder="First Name" />
                </label>

                <label>
                  <p>Second Name</p>
                  <input type="text" placeholder="Second Name" />
                </label>

                <label>
                  <p>Last Name</p>
                  <input type="text" placeholder="Last Name" />
                </label>

                <label>
                  <p>Gender</p>
                  <select>
                    <option disabled selected>
                      Select your gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>

                <label>
                  <p>Date of birth</p>
                  <input type="date" />
                </label>
              </span>
            </div>

            <button type="submit">Upload Information</button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <>
      <SeekerHeader />
      <Profile />
    </>
  );
}
