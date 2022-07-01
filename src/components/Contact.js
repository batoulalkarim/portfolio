import React from 'react' 
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'



function Contact() {

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
        <div className="contact">
          <div className="iframe">
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
        
    </div>
    )
}

export default Contact 