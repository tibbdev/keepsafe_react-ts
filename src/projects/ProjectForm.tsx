import React, { SyntheticEvent, useState } from 'react';
import { Project } from "./Project";

interface ProjectFormProps {
    project: Project;
    onSave: (project: Project) => void;
    onCancel: () => void;
}

function ProjectForm({project: initialProject, onSave, onCancel} : ProjectFormProps)
{
    const [project, setProject] = useState(initialProject);
    const handleSubmit = (evt: SyntheticEvent) => {
        evt.preventDefault();
        onSave(project);
    };

    const handleChange = (evt: any) => 
    {
        const {type, name, value, checked} = evt.target;
        // if input type is checkbox use checked
        // otherwise it's type is text, number etc. so use value
        let updatedValue = type === 'checkbox' ? checked : value;

        //if input type is number convert the updatedValue string to a +number
        if('number' === type)
        {
            updatedValue = Number(updatedValue);
        }

        const change = {
            [name]: updatedValue,
        };

        let updatedProject: Project;
        // need to do functional update because
        // the new project state is based on the previous project state
        // so we can keep the project properties that aren't being edited +like project.id
        // the spread operator (...) is used to
        // spread the previous project properties and the new change
        setProject((p) => {
            updatedProject = new Project({ ...p, ...change });
            return updatedProject;
        });
    };

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            {/* Project Name */}
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="Enter Project Name" value={project.name} onChange={handleChange} />

            {/* Project Description */}
            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="Enter Project Description" value={project.description} onChange={handleChange}></textarea>

            {/* Project Budget */}
            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="Enter Budget" value={project.budget} onChange={handleChange} />

            {/* Project Is Active */}
            <label htmlFor="isActive">Is Active?</label>
            <input type="checkbox" name="isActive" checked={project.isActive} onChange={handleChange} />

            {/* Buttons */}
            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span />
                <button className="bordered medium" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ProjectForm;