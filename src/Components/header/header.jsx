import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="header">
        <Link to="/" className={`logo ${scrolled ? "scrolled" : ""}`}>
          Insunity
        </Link>

        <span>
          <Link to="/">Home</Link>
          <Link to="/">Interviews</Link>
        </span>

        <Link to="/auth/login" className="header-login">
          Login
        </Link>
      </div>
    </header>
  );
}
