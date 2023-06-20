import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
// import '../App.css'

function ProjectsPage()
{
    return (
        <>
            <h1>Projects</h1>
            <pre>
                {
                    JSON.stringify(MOCK_PROJECTS, null, ' ')
                }
            </pre>
        </>
    )
}

export default ProjectsPage;