import "./Skills.css";
import { skills } from "../../data/skills";

export function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="skills__title">Skills</h1>
      <ul className="skills__list">
        {skills.map((group) => (
          <li className="skills__list__group" key={group.category}>
            <h2 className="skills__list__group__title">{group.category}</h2>
            <ul className="skills__list__group__items">
              {group.items.map((item) => (
                <li className="skills__list__group__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
