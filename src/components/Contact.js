/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Contact() {
  return (
    <section id="contact-section">
      <div className="contact-container">
        <h2 data-aos="fade-up">Contact</h2>
        <div className="horizontal-bar" data-aos="fade-up"></div>
        <h3 className="contact-h3">
          Have a question or want to work together?
        </h3>
        <br />
        <br />
        <div id="contact">
          <form
            id="contact-form"
            action="mailto:tammycwong@gmail.com"
            method="post"
            encrypt="text/plain"
            autocomplete="off"
            rel="noreferrer"
          >
            <input className="input-field" type="text" placeholder="Name" autocomplete="off"/>
            <br />
            <br />
            <input className="input-field" type="email" placeholder="Enter email" autocomplete="off"/>
            <br />
            <br />
            <textarea className="input-field" type="text" placeholder="Message" autocomplete="off"/>
            <br />
            <input id="submit-button" type="submit" value="Submit" />
          </form>
        </div>

        <div id="social-links">
          <h3 className="contact-h3">Is your name Wifi?</h3>
          <h4 className="contact-h4">
            Because I'm really feeling your connection:
          </h4>
          <a
            href="https://linkedin.com/in/tammycwong"
            target="_blank"
          >
            <img
              className="contact-icon"
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="linked in"
              title="LinkedIn"
            />
          </a>

          <a 
          href="mailto: tammycwong@gmail.com"
          target="_blank"
          >

          <img 
          className="contact-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
          alt="gmail"
          title="Gmail"
          />
          </a>

          <a
            href="https://tammycwong.medium.com/"
            target="_blank"
          >
            <img
              className="contact-icon"
              src="https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png"
              alt="medium"
              title="Medium"
            />
          </a>

          <a
            href="https://github.com/tammycwong"
            target="_blank"
          >
            <img
              className="contact-icon"
              src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
              alt="GitHub"
              title="GitHub"
            ></img>
          </a>

          <a
            href="https://instagram.com/handsome_awkwrd/"
            target="_blank"
          >
            <img
              className="contact-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
              width="40px"
              alt="instagram"
              title="Instagram"
            />
          </a>
        </div>
      </div>
      <footer>
          <h5>© 2022 | <strong>Design & build</strong> by Tammy Wong</h5>
      </footer>
    </section>
  );
}

export default Contact;
