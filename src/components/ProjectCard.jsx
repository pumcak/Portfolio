export default function ProjectCard({ project }) {
  return (
    <article className="project-item">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="meta">Tech: {project.tech.join(" - ")}</p>
    </article>
  );
}
