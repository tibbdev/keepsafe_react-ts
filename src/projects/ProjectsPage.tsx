import React from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
// import '../App.css'
import { Project } from "./Project";

function ProjectsPage()
{
    const temp_project = new Project({
        id: 1,
        name: 'Johnson - Kutch',
        description:
            'Fully-configurable intermediate framework. Ullam occaecati libero laudantium nihil voluptas omnis.',
        imageUrl: '/assets/placeimg_500_300_arch4.jpg',
        contractTypeId: 3,
        contractSignedOn: '2013-08-04T22:39:41.473Z',
        budget: 54637,
        isActive: false,
        });
    
    return (
        <>
            {
                console.log(temp_project)
            }
            {/* {
                MOCK_PROJECTS.map((project) => {
                    console.log(project);
                })
            } */}
            <h1>Projects</h1>
            <ProjectList projects={MOCK_PROJECTS} />
        </>
    );
}

export default ProjectsPage;