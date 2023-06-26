import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';


interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleProjectEditClick = (project: Project) =>
  {
    console.log(project);
    setProjectBeingEdited(project);
  }

  const handleCancelEditing = () => {
    setProjectBeingEdited({});
  }

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {
            
            project === projectBeingEdited ? 
            (
              <ProjectForm onCancel={handleCancelEditing} onSave={onSave}/> 
            ) : (
              <ProjectCard project={ project } onEdit={ handleProjectEditClick } />
            )
          }
        </div>
      ))}
    </div>
  );
}

export default ProjectList;