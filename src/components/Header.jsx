import React from "react";
import { Link } from "react-scroll";
import i18next from "../i18n";

const Header = ({ changeLanguage }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-success bg-success">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          Ignacio León
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="education"
                smooth={true}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="languages"
                smooth={true}
                duration={500}
              >
                Languages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="employmentHistory"
                smooth={true}
                duration={500}
              >
                Employment History
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
        {/* Other links */}
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button onClick={() => changeLanguage('en')} className="dropdown-item">English</button></li>
                <li><button onClick={() => changeLanguage('es')} className="dropdown-item">Español</button></li>
            </ul>
        </li>
    </ul>
</div>
      </div>
    </nav>
  );
};

export default Header;
