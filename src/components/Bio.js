import React from 'react'

function Bio(){
    return(
        <div className="bio">
        <h4 className="right">A LITTLE ABOUT BATOUL:</h4>
        <div className="bio-border">
            <div className="bio_middle">
            <span className="i">
            <div className="o">
            <div className="circles">
            <div className="lastone">
            <div className="bioimages">
                <img className="selfie" src="https://media-exp1.licdn.com/dms/image/C4E03AQEpXaYHJ8HE6g/profile-displayphoto-shrink_800_800/0/1592245263379?e=1658966400&v=beta&t=PjGoaW9WvkEyV1XGYKD-VB-y1i787eNKwmHiQYmolLc" alt="batoul" />
                </div>
            </div>
            </div>
            </div>
            </span>
                <span className="splitbio">
                    <div className="ab">
                    <strong>Batoul Alkarim</strong> is a Full Stack Software Engineer. She successfully completed Flatirons Software Engineering Bootcamp and now programs 
                    with JavaScript and Ruby, she also enjoys working with React and Ruby on Rails.
                    As an Entry Level Junior Dev, Batoul is excited to work for a company that 
                    is equipped with a strong and supportive team of devs and looking forward to 
                    growing with the right team! 
                    </div>
                    <br />
                   
                    <p className="socialMedia">SOCIAL MEDIA</p>
                    <span>
                    <a className="socials" href="https://www.instagram.com/batoulalkarim/" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png" width="40" alt="Download instagram png logo" /></a> 
                    <a className="socials" href="https://twitter.com/batoulalkarim" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" width="45" alt="twitter bird symbols png logo" /></a>
                    <a className="github" href="https://www.github.com/batoulalkarim" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" width="40" alt="512x512 logo github icon" className="socials"/></a>
                    </span>
                </span>
            </div>
            </div>
        </div>
    )
}

export default Bio