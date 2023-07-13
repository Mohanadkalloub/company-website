import { NavLink, Route, Routes } from "react-router-dom";
import LogoImage from "../../assets/images/logo.png";
import { Fragment } from "react";
import HomePage from "../../pages/HomePage";
import AboutUsPage from "../../pages/AboutUsPage";
import ProjectPage from "../../pages/ProjectPage";
import ContactUsPage from "../../pages/ContactUsPage";
const Header = () => {
  return (
    <Fragment>
      <nav>
        <ul className="topnav">
          <li>
            <NavLink to="#">
              <img src={LogoImage} height="50" />
            </NavLink>
          </li>
          <div className="right">
            <li>
              <NavLink
                to="/"
                className={(props) => (props.isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(props) => (props.isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={(props) => (props.isActive ? "active" : "")}>
                project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(props) => (props.isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Fragment>
  );
};
export default Header;
