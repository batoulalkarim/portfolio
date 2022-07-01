import React from 'react';
 

function Projects(){

    function handleClick(){
        console.log('hello')
    }

    return(
        <div id="portfolio">
        <h2 className="apps">PROJECTS</h2>
        <div className="carousel">
        {/* <Carousel
            centerMode={true}
            centerSlidePercentage={100}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            onClickItem={(e) => handleClick(e)}
        >
            <div className="carousel_item">
                <p className="desc">TechMate - A Dating App For Developers</p>
                <p className="desc">React - Ruby on Rails - NodeJS - Postgresql</p>
                <img className="carousel_img" src="/images/techmate.png"/>
            </div>
            <div className="carousel_item">
                <p className="desc">Status - A Social Media App Designed to Validate Your Ego</p>
                <img src="/images/status.png" />
            </div>
            <div className="carousel_item">
                <p className="desc">LivWell - A Platform to Help You Sign Up for Volunteering Opportunities</p>
                <img src="/images/livwell.png" />
            </div>
        </Carousel> */}
        </div>
    </div>
       
    )
}

export default Projects