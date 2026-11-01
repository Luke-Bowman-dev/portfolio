import "./Hero.css";
import { profile } from "../../data/profile.ts";
import projectsImage from "../../assets/projects.png";
import projectsImageHover from "../../assets/projects(hover).png";
import contactImage from "../../assets/contacts.png";
import contactImageHover from "../../assets/contacts(hover).png";
import { useState } from "react";

export function Hero() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__greeting">HI, I'M</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__description">{profile.blurb}</p>
        <div className="hero__links">
          <a
            className="hero__link hero__link-projects"
            href="#projects"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <img
              className="hero__link-image"
              src={isHovered1 ? projectsImageHover : projectsImage}
            />
          </a>
          <a
            className="hero__link hero__link-contacts"
            href="#contact"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img
              className="hero__link-image"
              src={isHovered2 ? contactImageHover : contactImage}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
