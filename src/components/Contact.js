import React from 'react';

function Contact() {

    return (
    <div className="contact-container">
        <h2>Contact</h2>
        <h3 className="margin">Have a question or want to work together?</h3>
        <br/>
        <br/>
        <div id="contact">
        <form id="contact-form" action="mailto:tammycwong@gmail.com" method="post"
        encrypt="text/plain">
        <input class="input-field" type="text" placeholder="Name" />
        <br/>
        <br/>
        <input class="input-field" type="email" placeholder="Enter email" />
        <br/>
        <br/>
        <textarea class="input-field" type="text" placeholder="Message" />
        <br/>
        <input id="submit-button" type="submit" value="Submit" />
        </form>
        </div>
        </div>

        

    
    )
}

export default Contact;