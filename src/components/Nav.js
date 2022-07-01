import React from 'react';
// import { Link } from 'react-router-dom'


function Nav(){
    return(
        <div className="topbar">
            <span>Batoul Alkarim</span>
            {/* <a href="/">HOME</a> */}
            <a href="#publications">PUBLICATIONS</a>
            <a href="#portfolio">PROJECTS</a>
        </div>
    )
}

export default Nav