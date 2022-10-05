import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCloudMoon, BsCloudSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import "./styles.css";

const MenuItems = [
  {
    title: "About",
    url: "about",
    cName: "nav-links",
  },
  {
    title: "Projects",
    url: "projects",
    cName: "nav-links",
  },
  {
    title: "Services",
    url: "service",
    cName: "nav-links",
  },
  {
    title: "Contacts",
    url: "contact",
    cName: "nav-links",
  },
];

const Navbar = ({ clicked, onClick, theme, onSwitch }) => {
  return (
    <nav>
      <div className="switch_container">
        {theme === "dark" ? (
          <h3 onClick={onSwitch()}>
            Light theme <BsCloudSun />{" "}
          </h3>
        ) : (
          <h3 onClick={onSwitch()}>
            Dark theme <BsCloudMoon />
          </h3>
        )}

        <div className="menu-icon" onClick={onClick()}>
          {clicked === true ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </div>
      </div>

      <ul className={clicked === false ? "active" : "inactive"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <span>&#60;</span> &nbsp;
              <Link
                to={item.url}
                onClick={onClick()}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                // className={({ isActive }) => (isActive ? "activelink" : "j")}
              >
                {item.title}
              </Link>
              <span> &#47; &#62;</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
