import React from "react";
import { useRef } from "react";
import navcss from "./Nav.module.css";

export default function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navcss.showMenu);
  };

  return (
    <nav>
      <div className={navcss.logo}>
        <span>Mohit</span>
      </div>

      <ul ref={menu}>
        <li className={navcss.navItem}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
        </li>
        <li className={navcss.navItem}>
          <a
            href="#domains"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("domains")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Domains
          </a>
        </li>
        <li className={navcss.navItem}>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Experience
          </a>
        </li>
        <li className={navcss.navItem}>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
        </li>
        <li className={navcss.navItem}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className={navcss.navBtns}>
        <div className={navcss.social}>
          <a
            href="https://www.linkedin.com/in/themohitbharti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          <a
            href="https://github.com/themohitbharti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            href="https://twitter.com/themohitbharti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-twitter-x-line"></i>
          </a>
        </div>

        <div className={navcss.bars} onClick={menuHandler}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </nav>
  );
}
