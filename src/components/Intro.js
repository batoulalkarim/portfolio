import React from 'react';
import 'animate.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'


function Intro(){

    const SERVICE_ID = "service_ghyfxro";
    const TEMPLATE_ID = "template_bfxojow";
    const USER_ID = "G0wXrx2ISswCD_Kbu";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
   
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
            {/* <div className="shell">
                <div className="middle">
            <div className="home">
                <span className="batoul">BATOUL</span><br />
                <span className="cooleffect">ALKARIM</span><br />
                <span>IS AN </span> 
                <span className="animate__animated">AWESOME</span> <br />
                <span>DEVELOPER</span>
            </div>
            </div>
            </div> */}
            <div className="bio">
            <h4 className="right">A LITTLE ABOUT BATOUL:</h4>
                <div className="bio_middle">
                <span className="i">
                <div className="o">
                <div className="circles">
                <div className="bioimages">
                    <img className="selfie" src="https://media-exp1.licdn.com/dms/image/C4E03AQEpXaYHJ8HE6g/profile-displayphoto-shrink_800_800/0/1592245263379?e=1658966400&v=beta&t=PjGoaW9WvkEyV1XGYKD-VB-y1i787eNKwmHiQYmolLc" alt="batoul" />
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
                        {/* <a href="mailto:batoulalkarim1@gmail.com" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-12.png" width="40" alt="gmail, email logo png" className="socials"/></a> */}
                        </span>
                    </span>

                </div>
            </div>
            <div id="portfolio">
                <h2 className="apps">BATOUL MAKES COOL APPLICATIONS </h2>
                <div className="carousel">
                <Carousel
                    centerMode={true}
                    centerSlidePercentage={100}
                >
                    <div className="carousel_item">
                        <p className="desc">TechMate - A Dating App For Developers</p>
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
                </Carousel>
                </div>
            </div>
            <div className="contact">
                <div className="center">
                <h2 className="center">CONTACT ME</h2>
                <div className="form">
                <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='from_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                    />
                    <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='from_name'
                    placeholder='Name…'
                    required
                    icon='user circle'
                    iconPosition='left'
                    />
                    <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='message'
                    placeholder='Message…'
                    required
                    />
                    <Button type='submit' color='green'>Submit</Button>
                </Form>
                </div>
                </div>
                <div>
                <iframe
                    title="map"
                    width="500"
                    height="550"
                    frameBorder="0" 
                    // {style="border:0"}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBIB7cKO8u35pCskKTCCvZwSrh9cIQ5WtE&q=Manhattan, New+York"
                    allowFullScreen>
                    </iframe>
                    </div>
            </div>
        </div>
    )
}

export default Intro