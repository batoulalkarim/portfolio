import React from 'react';

function ProjectCard({project}){
    return(
        <div className="projectCardContainer">
            <div className="projectCard">
                <h1>{project.name}</h1>
                <p>{project.tech}</p>
                <img alt="oh no" src={project.photo1} className="projecthomeimg" />
            </div>
        </div>
    )
}

export default ProjectCard