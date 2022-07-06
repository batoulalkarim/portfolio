import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import db from '../db.json'

function Projects(){
    const projects = db.projects 
    console.log(projects)

    
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