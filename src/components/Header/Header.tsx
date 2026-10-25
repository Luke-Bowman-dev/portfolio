import "./Header.css";
import { profile } from "../../data/profile.ts";

export function Header() {
  return (
    <header className="header">
      <a className="header__profile" href="#home">
        {profile.name}
      </a>
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
  );
}
