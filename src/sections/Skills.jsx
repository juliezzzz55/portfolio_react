import SkillBadge from '../components/SkillBadge'

const languages = ['Java', 'HTML', 'CSS', 'JavaScript', 'React']
const db = ['MySQL', 'PostgresSQL', 'MongoDB']
const general = ['Git', 'Docker', 'ArgoCD', 'Services Azure', 'CI/CD pipelines', 'UML']

function Skills() {
  return (
    <section id="skills">
      <h2>Compétences</h2>
      <h3>Programmation</h3>
      <div className="skills-list">
        {languages.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
      <h3>Base de données</h3>
      <div className="skills-list">
        {db.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
      <h3>Général</h3>
      <div className="skills-list">
        {general.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills
