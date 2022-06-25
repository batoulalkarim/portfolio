import React from 'react';
import { Link } from 'react-router-dom'


function Nav(){
    return(
        <div className="topbar">
            <span>Batoul Alkarim</span>
            <Link to="/">HOME</Link>
            <Link to="/publications">PUBLICATIONS</Link>
            <Link to="/projects">PROJECTS</Link>
        </div>
    )
}

export default Nav