import "./Contact.css";
import { profile } from "../../data/profile";
import githubImage from "../../assets/github.png";
import githubImageHover from "../../assets/github(hover).png";
import linkedinImageHover from "../../assets/linkedIn(hover).png";
import linkedinImage from "../../assets/linkedIn.png";
import emailImage from "../../assets/email.png";
import resumeImage from "../../assets/resume.png";
import locationImage from "../../assets/location.png";
import { useState } from "react";
import resumeFile from "../../assets/resume(placeholder).pdf";

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <nav className="contact">
      <ul className="contact__list">
        <li className="contact__list__item">
          <a
            className="contact__list__item__link"
            href={`mailto:${profile.email}`}
          >
            <img className="contact__list__item__img" src={emailImage} />
            <p className="contact__list__item__text_email">{profile.email}</p>
          </a>
        </li>
        <li className="contact__list__item">
          <a
            className="contact__list__item__link"
            href={profile.locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact__list__item__img" src={locationImage} />
            <p className="contact__list__item__text_location">
              {profile.locationText}
            </p>
          </a>
        </li>
        <li className="contact__list__item">
          <a
            className="contact__list__item__link"
            href={resumeFile}
            download="My_Resume.pdf"
          >
            <img className="contact__list__item__img" src={resumeImage} />
            <p className="contact__list__item__text_resume">
              Download my resume (PDF)
            </p>
          </a>
        </li>
      </ul>
      <ul className="contact__social-list">
        <li className="contact__social-list__item">
          <a
            className="contact__social-list__item__link"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className="contact__social-list__item__img"
              src={isHovered ? githubImageHover : githubImage}
            />
          </a>
        </li>
        <li className="contact__social-list__item">
          <a
            className="contact__social-list__item__link"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img
              className="contact__social-list__item__img"
              src={isHovered2 ? linkedinImageHover : linkedinImage}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
