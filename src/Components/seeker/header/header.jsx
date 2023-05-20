import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FaBookmark,
  FaEnvelope,
  FaListAlt,
  FaSearch,
  FaThumbsUp,
} from "react-icons/fa";
import "./header.css";

export default function SeekerHeader() {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedPage = event.target.value;
    setSelectedOption(selectedPage);
    if (selectedPage) {
      history.push(`/${selectedPage}`);
    }
  };

  return (
    <nav className="seeker-header">
      <div className="seeker-h-cont">
        <Link className="seeker-logo" to="/seeker">
          Insunity
        </Link>

        <div className="header-menu">
          <Link to="/recommendations" className="menu-link">
            <FaThumbsUp />
            <span>Recommendations</span>
          </Link>
          <Link to="/find-job" className="menu-link">
            <FaSearch />
            <span>Explore</span>
          </Link>
          <Link to="/bookmarks" className="menu-link">
            <FaBookmark />
            <span>Bookmarks</span>
          </Link>
          <Link to="/messages" className="menu-link">
            <FaEnvelope />
            <span>Messages</span>
          </Link>
          <Link to="/applied-jobs" className="menu-link">
            <FaListAlt />
            <span>Applied Jobs</span>
          </Link>
        </div>

        <div className="header-select">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Menu</option>
            <option value="seeker-profile">Profile</option>
            <option value="seeker-settings">Settings</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
