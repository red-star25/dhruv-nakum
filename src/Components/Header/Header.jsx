import "./Header.css";
import React, { useState } from "react";
import menuIcon from "../../assets/images/menu.png";
import cancelIcon from "../../assets/images/cancel.png";

function Header() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("header");
  const [headerLogoClass, setHeaderLogoClass] = useState("header__logo");

  const onLinkClicked = (linkName) => {
    setSelectedLink(linkName);
  };

  return (
    <div className={headerClass}>
      <div className={headerLogoClass}>
        <h1>{"<D>"}</h1>
      </div>
      <div
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          if (headerClass === "header__mob") {
            setHeaderClass("header");
          } else {
            setHeaderClass("header__mob");
          }
          if (headerLogoClass === "header__logo") {
            setHeaderLogoClass("header__logo__mob");
          } else {
            setHeaderLogoClass("header__logo");
          }
          document
            .querySelector(".header__mobile__links")
            .classList.toggle("open");
        }}
        className="header__mobile__links header__logo__center"
      >
        <img src={!isMenuOpen ? menuIcon : cancelIcon} alt="" />
        {isMenuOpen ? (
          <div className="menuLinks">
            <ul>
              <li>
                <a
                  onClick={() => onLinkClicked("home")}
                  id={selectedLink === "home" ? "selectedLink" : ""}
                  href="#home"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  onClick={() => onLinkClicked("project")}
                  id={selectedLink === "project" ? "selectedLink" : ""}
                  href="#project"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  onClick={() => onLinkClicked("skills")}
                  id={selectedLink === "skills" ? "selectedLink" : ""}
                  href="#skills"
                >
                  SKILLS
                </a>
              </li>
              <li
                onClick={() => onLinkClicked("connect")}
                id={selectedLink === "connect" ? "selectedLink" : ""}
              >
                <a
                  onClick={() => onLinkClicked("connect")}
                  id={selectedLink === "connect" ? "selectedLink" : ""}
                  href="#connect"
                >
                  CONNECT
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="header__links">
        <a
          onClick={() => onLinkClicked("home")}
          id={selectedLink === "home" ? "selectedLink" : ""}
          href="#home"
        >
          HOME
        </a>
        <a
          onClick={() => onLinkClicked("project")}
          id={selectedLink === "project" ? "selectedLink" : ""}
          href="#project"
        >
          PROJECTS
        </a>
        <a
          onClick={() => onLinkClicked("skills")}
          id={selectedLink === "skills" ? "selectedLink" : ""}
          href="#skills"
        >
          SKILLS
        </a>
        <a
          onClick={() => onLinkClicked("connect")}
          id={selectedLink === "connect" ? "selectedLink" : ""}
          href="#connect"
        >
          CONNECT
        </a>
      </div>
    </div>
  );
}

export default Header;
