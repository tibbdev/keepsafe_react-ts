import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { projectAPI } from "./projectAPI";
import { Project } from "./Project";
import ProjectDetail from "./ProjectDetail";

function ProjectPage(props: any)
{
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState<Project | null>(null);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const id = Number(params.id);

    useEffect(() => {
        setLoading(true);
        projectAPI.find(id)
                    .then((data) => {
                        setProject(data);
                        setLoading(false);
                    })
                    .catch((e) => {
                        setError(e);
                        setLoading(false);
                    });
    }, [id]);

    return (
        <div>
            <>
                <h1>Project Detail</h1>

                {/* Display Loading Spinner whilst Loading */}
                {
                    loading && (
                        <div className="center-page">
                            <span className="spinner primary"></span>
                            <p>Loading...</p>
                        </div>
                    )
                }
                
                {/* If there's an error loading the project, dispay an error banner */}
                {
                    error && (
                        <div className="row">
                            <div className="card large error">
                                <section>
                                    <p>
                                        <span className="icon-alert inverse"></span> {error}
                                    </p>
                                </section>
                            </div>
                        </div>
                    )
                }

                {project && <ProjectDetail project={project} />}
            </>
        </div>
    );
}
export default ProjectPage;