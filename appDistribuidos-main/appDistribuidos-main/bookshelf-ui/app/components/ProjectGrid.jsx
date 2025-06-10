import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, onNew, onCardClick }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onClick={() => onCardClick(p)} />
      ))}
      {/* Card para crear nuevo proyecto */}
      <div
        style={{
          width: 120,
          margin: 10,
          backgroundColor: "#2F4254",
          borderRadius: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "#F79773",
          fontSize: 48,
          fontWeight: "bold",
        }}
        onClick={onNew}
      >
        +
      </div>
    </div>
  );
}
