import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects')
        .then(res => res.json())
        .then(projects => setProjects(projects))
    }, [])

    
    function showCards(){
        if(projects){
            return projects.map(project => {
                return <ProjectCard project={project} />
            })
        }
    }


    return(
        <div id="portfolio">
            <h2 className="apps">PROJECTS</h2>
            <div className="carousel">
                {showCards()}
            </div>
        </div>
       
    )
}

export default Projects