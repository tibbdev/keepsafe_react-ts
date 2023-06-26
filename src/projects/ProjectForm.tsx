import React, { SyntheticEvent } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
    onSave: (project: Project) => void;
    onCancel: () => void;
}

function ProjectForm({onSave, onCancel} : ProjectFormProps)
{
    const handleSubmit = (evt: SyntheticEvent) => {
        evt.preventDefault();
        onSave(new Project({name: "Updated Project"}));
    };

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            {/* Project Name */}
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="Enter Project Name" />

            {/* Project Description */}
            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="Enter Project Description"></textarea>

            {/* Project Budget */}
            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="Enter Budget" />

            {/* Project Is Active */}
            <label htmlFor="isActive">Is Active?</label>
            <input type="checkbox" name="isActive" />

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