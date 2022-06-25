import React from 'react';
import 'animate.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


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
            <div className="home">
                <span className="batoul">BATOUL</span><br />
                <span className="cooleffect">ALKARIM</span><br />
                <span>IS AN </span> 
                <span className="animate__animated">AWESOME</span> <br />
                <span>DEVELOPER</span>
            </div>
            <div className="bio">
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
                        <a href="mailto:batoulalkarim1@gmail.com" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/gmail-email-logo-png-12.png" width="40" alt="gmail, email logo png" className="socials"/></a>
                        </span>
                    </span>

                <div className="bioimages">
                    <img className="selfie" src="https://media-exp1.licdn.com/dms/image/C4E03AQEpXaYHJ8HE6g/profile-displayphoto-shrink_800_800/0/1592245263379?e=1658966400&v=beta&t=PjGoaW9WvkEyV1XGYKD-VB-y1i787eNKwmHiQYmolLc" alt="batoul" />
                </div>
            </div>
            <div className="portfolio">
                <h2>BATOUL MAKES COOL APPLICATIONS </h2>
                <div className="carousel">
                <Carousel
                    centerMode={true}
                    centerSlidePercentage={100}
                >
                    <div className="carousel_item">
                        <p className="desc">TechMate - A Dating App For Developers</p>
                        <img className="carousel_img" src="/images/techmate.png"/>
                        {/* <p className="legend">An app to help you get food delivered faster!</p> */}
                    </div>
                    <div className="carousel_item">
                        <p className="desc">Status - A Social Media App Designed to Validate Your Ego</p>
                        <img src="/images/status.png" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div className="carousel_item">
                        <p className="desc">LivWell - A Platform to Help You Sign Up for Volunteering Opportunities</p>
                        <img src="/images/livwell.png" />
                        {/* <p className="legend">Legend 3</p> */}
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