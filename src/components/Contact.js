import React from 'react';

function Contact() {

    return (
    <div className="contact-container">
        <h2 data-aos="fade-left">Contact</h2>
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

        <div id="footer">
        <a href="https://linkedin.com/in/tammycwong">
            <img className="contact-icon" src="https://image.flaticon.com/icons/png/512/174/174857.png" height= "36px" alt="linked in" title="LinkedIn"/>
            </a>

<a href="https://tammycwong.medium.com/">
    <img className="contact-icon" src="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png" height="36px" alt="medium" title="Medium"/>
    </a>

<a href="mailto: tammycwong@gmail.com">
    <img className="contact-icon" src="https://www.freeiconspng.com/thumbs/gmail-icon/communication-gmail-icon-3.png" width="36px" height="36px" alt="email" title="E-Mail"/>
    </a>

<a href="https://instagram.com/handsome_awkwrd/">
    <img className="contact-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" width="40px" alt="instagram" title="Instagram"/>
    </a>
        </div>
        </div>

        

    
    )
}

export default Contact;