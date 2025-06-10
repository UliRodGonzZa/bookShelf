'use client';

import { useRouter } from 'next/navigation';
import { useProjects } from '../hooks/useProjects';
import ProjectGrid from '../components/ProjectGrid';

export default function Page() {
  // Initialize the Next.js router to handle navigation programmatically
  const router = useRouter();

  // Get the list of projects using a custom hook
  const { projects } = useProjects();

  // Handler function to navigate to the project creation page
  const handleOpenDialog = () => {
    router.push('/ruta-de-crear-proyecto'); // Replace this path with the actual route for project creation
  };

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: "white",
        minHeight: "100vh" // Ensure the div takes at least full viewport height
      }}
    >
      {/* Render the ProjectGrid component, passing the projects array */}
      {/* Pass handlers: onNew for adding new project, onCardClick for clicking on a project card */}
      <ProjectGrid
        projects={projects}
        onNew={handleOpenDialog}
        onCardClick={(p) => alert(p.title)} // Show alert with project title when a card is clicked
      />
    </div>
  );
}
