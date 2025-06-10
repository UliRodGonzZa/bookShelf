export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 200,
        margin: 10,
        padding: 10,
        borderRadius: 6,
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        cursor: "pointer",
      }}
    >
      {/* Verifica que exista la imagen */}
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            width: "100%", // Ajusta el tamaño de la imagen
            borderRadius: "6px 6px 0 0", // Esquinas redondeadas arriba
            objectFit: "cover", // Hace que la imagen cubra todo el espacio disponible
            height: 100, // Puedes ajustar la altura de la imagen
          }}
        />
      )}

      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}
