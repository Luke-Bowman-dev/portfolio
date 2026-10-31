import "./App.css";
import { Header } from "../Header/Header.tsx";
import { Hero } from "../Hero/Hero.tsx";
import { Projects } from "../Projects/Projects.tsx";
import { Skills } from "../Skills/Skills.tsx";
import { Footer } from "../Footer/Footer.tsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
