function ProjectCard({ title, description, link }) {
  return (
    <div style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '24px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noreferrer">Voir le projet →</a>}
    </div>
  )
}

export default ProjectCard
