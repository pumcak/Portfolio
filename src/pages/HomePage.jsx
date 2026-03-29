import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { iutProjects, personalProjects } from "../data/projects.js";

export default function HomePage() {
  return (
    <main className="container page-home">
      <Reveal>
        <section className="hero">
          <img
            src="/assets/images/profile.jpg"
            alt="Portrait de Timeo Chabal"
            className="profile-image"
          />
          <div>
            <h1>Salut, moi c'est Timeo</h1>
            <p className="intro">
              Je suis etudiant en info et j'aime construire des projets web qui me ressemblent.
              Ici je garde une base simple: du code clair, du style perso, et une progression visible.
            </p>
            <p className="status">Site en evolution - version perso</p>
            <Link to="/projets" className="cta-link">Voir tous mes projets</Link>
          </div>
        </section>
      </Reveal>

      <div className="layout-grid">
        <Reveal>
          <section id="about" className="card about">
            <h2>A propos</h2>
            <p>
              J'aime apprendre en pratiquant, tester des idees et les transformer en pages utiles.
              Je cherche un bon equilibre entre design, lisibilite et code bien organise.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="card projects">
            <h2>Apercu projets IUT</h2>
            <div className="project-list">
              {iutProjects.slice(0, 1).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.15}>
          <section className="card projects">
            <h2>Apercu projets perso</h2>
            <div className="project-list">
              {personalProjects.slice(0, 1).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section id="contact" className="card contact">
            <h2>Contact</h2>
            <p>Tu peux me retrouver ici :</p>
            <div className="social-links">
              <a href="https://instagram.com/timeo.chbl" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://github.com/pumcak" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
