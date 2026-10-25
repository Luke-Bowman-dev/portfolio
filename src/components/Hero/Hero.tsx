import "./Hero.css";
import { profile } from "../../data/profile.ts";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__greeting">HI, I'M</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__description">{profile.blurb}</p>
        <div className="hero__links">
          <a className="hero__link hero__link-projects" href="#projects">
            Projects
          </a>
          <a className="hero__link hero__link-contacts" href="#contact">
            Contact
          </a>
        </div>

      </div>
    </section>
  );
}