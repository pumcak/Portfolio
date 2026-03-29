import Reveal from "../components/Reveal.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { iutProjects, personalProjects } from "../data/projects.js";

export default function ProjectsPage() {
  return (
    <main className="container page-projects">
      <Reveal>
        <section className="card">
          <h1>Mes Projets</h1>
          <p>
            Cette page rassemble les projets de l'IUT et les projets personnels.
            Elle est faite pour etre enrichie au fur et a mesure.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="card">
          <h2>Projets IUT</h2>
          <div className="project-list two-cols">
            {iutProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="card">
          <h2>Projets Personnels</h2>
          <div className="project-list two-cols">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
