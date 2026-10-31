import "./Footer.css";
import { Contact } from "../Contact/Contact.tsx";

export function Footer() {
  return (
    <div className="footer">
      <h1 className="footer__title">Get in Touch</h1>
      <p className="footer__description">
        Have a project in mind, an open position, or just want to chat about
        development strategies? Drop a line here or contact me via my email
        below.
      </p>
      <Contact />
    </div>
  );
}
