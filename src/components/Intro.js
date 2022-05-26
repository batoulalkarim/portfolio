import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


function Intro(){
   
    return(
        <div>
            <nav className="topbar">
                <span>Batoul Alkarim</span>
                <Link to="/publications">PUBLICATIONS</Link>
                <Link to="/projects">PROJECTS</Link>
            </nav>
            <div className="home">
                <span className="batoul">BATOUL</span><br />
                <span className="cooleffect">ALKARIM</span><br />
                <span>IS AN </span> 
                <span className="animate__animated">AWESOME</span> <br />
                <span>DEVELOPER</span>
            </div>
            <div className="bio">
                {/* <div> */}
                    <span className="splitbio">
                        <strong>Batoul Alkarim</strong> graduated from Flatiron School with a certificate in 
                        Software Engineering. She took the Fullstack course and now programs 
                        with JavaScript and Ruby, and prefers frameworks like React and Rails.
                        As an Entry Level Junior Dev, Batoul is excited to work for a company that 
                        is equipped with a strong and supportive team of devs and looking forward to 
                        growing with the right team! 
                        <br />
                       
                        <p className="socialMedia">CONNECT WITH BATOUL</p>
                        <span className="socials">
                        <a  href="https://www.freepnglogos.com/pics/logo-instagram-png" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png" width="40" alt="Download instagram png logo" /></a> 
                        <a  href="http://www.twitter.com/batoulalkarim"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-icon-png-logo-2.png" width="40" alt="twitter bird icon png logo" className="socials"/></a> 
                        <a  href="https://www.github.com/batoulalkarim" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" width="40" alt="512x512 logo github icon" className="socials"/></a>
                        </span>
                    </span>

                <div className="bioimages">
                    <img className="selfie" src="https://media-exp1.licdn.com/dms/image/C4E03AQEpXaYHJ8HE6g/profile-displayphoto-shrink_800_800/0/1592245263379?e=1658966400&v=beta&t=PjGoaW9WvkEyV1XGYKD-VB-y1i787eNKwmHiQYmolLc" alt="batoul" />
                </div>
            </div>
            <div className="portfolio">
                <h2>BATOUL MAKES COOL APPLICATIONS </h2>
            </div>
            <div className="contact">
                <div className="center">
                <h2 className="center">CONTACT ME</h2>
                </div>
                <div>
                <iframe
                    title="map"
                    width="500"
                    height="550"
                    frameborder="0" 
                    // {style="border:0"}
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBIB7cKO8u35pCskKTCCvZwSrh9cIQ5WtE&q=Manhattan, New+York"
                    allowfullscreen>
                    </iframe>
                    </div>
            </div>
        </div>
    )
}

export default Intro