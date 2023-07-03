import React, { Fragment, useState , useEffect} from "react";
import { projectAPI } from "./projectAPI";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
// import '../App.css'
import { Project } from "./Project";

function ProjectsPage()
{
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => 
    {
        async function loadProjects() 
        {
            setLoading(true);
            try
            {
                const data = await projectAPI.get(currentPage);
                setError('');

                if(1 === currentPage)
                {
                    setProjects(data);
                }
                else
                {
                    setProjects((projects) => [...projects, ...data]);
                }
            }
            catch (e)
            {
                if (e instanceof Error)
                {
                    setError(e.message);
                }
            }
            finally
            {
                setLoading(false);
            }
        }
        loadProjects();
    }, [currentPage]); // UseEffect has a dependency on the value of currentPage.

    const handleMoreClick = () =>
    {
        setCurrentPage((currentPage) => currentPage + 1);
    }

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
            {
                error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                            <span className="icon-alert inverse "></span>
                            {error}
                            </p>
                        </section>
                    </div>
                </div>
                )
            }
            <ProjectList projects={projects} onSave={SaveProject}/>
            {
                !loading && !error && (
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="button-group fluid">
                                <button onClick={handleMoreClick}>More...</button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                loading && (
                    <div className="center-page">
                        <span className="spinner primary"></span>
                        <p>Loading...</p>
                    </div>
                )
            }
        </Fragment>
    );
}

export default ProjectsPage;