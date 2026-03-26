import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/project'

function Projects() {
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
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
