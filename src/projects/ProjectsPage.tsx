import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
// import '../App.css'
import { Project } from "./Project";

function ProjectsPage()
{
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={MOCK_PROJECTS} />
        </>
    );
}

export default ProjectsPage;