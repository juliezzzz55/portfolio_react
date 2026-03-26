function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noreferrer">Voir le projet →</a>}
    </div>
  )
}

export default ProjectCard
