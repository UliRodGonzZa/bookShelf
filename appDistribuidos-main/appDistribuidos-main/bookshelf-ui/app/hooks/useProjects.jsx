import { useState } from "react";
import { initialProjects } from "../constants/initialProjects";

// Custom hook to manage projects state
export function useProjects() {
  // Initialize state with the initial projects array
  const [projects, setProjects] = useState(initialProjects);

  // Function to add a new project to the list
  // Automatically assigns an id based on the current length + 1
  const addProject = (newProject) => {
    setProjects((prev) => [...prev, { ...newProject, id: prev.length + 1 }]);
  };

  // Return the current list of projects and the function to add more
  return { projects, addProject };
}
