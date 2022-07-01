import React from 'react';
import 'animate.css'
import Projects from './Projects';
import ReactPlayer from 'react-player'
import Contact from './Contact';
import Publications from './Publications';
import Bio from './Bio';

function Intro(){
   
    return(
        <div>
            <div className="secretMessage">
                you found the secret message!! ello!! follow me on instagram ;)
            </div>
            <div className="video">
                <div className="reactPlayer">
                <ReactPlayer 
                url="https://static.videezy.com/system/resources/previews/000/043/309/original/200128_03_Saber-rectangle-blue-pink-seamless-loop.mp4" 
                playing={true}
                loop={true}
                width="100%"
                />
                </div>
                <div className="home">
                <span className="batoul">BATOUL</span><br />
                <span className="cooleffect">ALKARIM</span><br />
                <span>IS AN </span> 
                <span className="animate__animated">AWESOME</span> <br />
                <span>DEVELOPER</span>
            </div>
            </div>
            <Bio />
            <Projects />
            <Publications />
            <Contact />
        </div>
    )
}

export default Intro