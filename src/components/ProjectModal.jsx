function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {project.photo && project.photo !== 'lalalala' && (
          <img src={project.photo} alt={project.title} className="modal-image" />
        )}
        <div className="modal-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn">
              Voir le projet →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
