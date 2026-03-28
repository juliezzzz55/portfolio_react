import BorderGlow from "./BorderGlow/BorderGlow";
function ProjectCard({ title, description, link, onClick }) {
  return (
    <>
      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#0f0f0f"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={false}
        colors={["#c084fc", "#f472b6", "#38bdf8"]}
      >
      <div
        className="project-card"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <span className="project-card-link">Voir le projet →</span>}
      </div>
      </BorderGlow>
    </>
  );
}

export default ProjectCard;
