import React, { Fragment, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
// import '../App.css'
import { Project } from "./Project";

function ProjectsPage()
{
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

    const SaveProject = (project: Project) => {
        console.log('Saving Project: ', project);
        let updatedProjects = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProjects);
    };

    return (
        <Fragment>
            <h1>Projects</h1>
            <ProjectList projects={projects} onSave={SaveProject}/>
        </Fragment>
    );
}

export default ProjectsPage;