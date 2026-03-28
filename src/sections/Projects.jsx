import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/project'

function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects">
      <h2>Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Projects
