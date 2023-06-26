import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
// import '../App.css'
import { Project } from "./Project";

function ProjectsPage()
{
    const SaveProject = (project: Project) => {
        console.log('Saving Project: ', project);
    };

    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={MOCK_PROJECTS} onSave={SaveProject}/>
        </>
    );
}

export default ProjectsPage;