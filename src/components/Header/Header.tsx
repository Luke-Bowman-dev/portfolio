import "./Header.css";
import { profile } from "../../data/profile.ts";
import { useState } from "react";
import menuImage from "../../assets/menu.png";
import menuImageHover from "../../assets/menu(hover).png";
import closeButtonImage from "../../assets/closeButton.png";
import closeButtonImageHover from "../../assets/closeButton(hover).png";
import { Contact } from "../Contact/Contact.tsx";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="header-container">
      <header className="header">
        <a className="header__profile" href="#home">
          {profile.name}
        </a>
        <button
        className="header__nav-btn"
          type="button"
          aria-expanded={isOpen}
          aria-controls="header-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img className="header__nav-img" src={isOpen ? (isHovered ? closeButtonImageHover : closeButtonImage) : (isHovered ? menuImageHover : menuImage)}/>
        </button>
        <nav className="header__nav">
          <a className="header__link" href="#home">
            Home
          </a>
          <a className="header__link" href="#skills">
            Skills
          </a>
          <a className="header__link" href="#projects">
            Projects
          </a>
          <a className="header__link" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <div className={isOpen ? "mobile-menu_open" : "mobile-menu_closed"}>
        <nav className="mobile-menu__nav">
          <a className="mobile-menu__link" href="#home">
            Home
          </a>
          <a className="mobile-menu__link" href="#skills">
            Skills
          </a>
          <a className="mobile-menu__link" href="#projects">
            Projects
          </a>
          <a className="mobile-menu__link" href="#contact">
            Contact
          </a>
        </nav>
        <Contact />
      </div>
    </div>
  );
}
