import React from 'react';
import ModalVideo from 'react-modal-video';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Projects() {

    return (
      <div className="projects-container">
      {/* <ScrollAnimation animateIn="fade-left" animateOut="" delay={1000}> */}

        <h2>Projects</h2>
        <div className="projects">
        <img class ="project-image" src="https://i.ibb.co/2qwjRTb/Screen-Shot-2021-07-26-at-3-53-08-PM.png"/>
        <br/>
        <div class="overlay"></div>
        <div class ="project-details fadeIn-bottom">
          <a href="https://youtu.be/4YpLQZZIsIM" class="project-title" target="_blank">View Site</a>
        </div>

        {/* <a href="https://youtu.be/4YpLQZZIsIM" target="_blank">Demo</a> | <a href="">GitHub</a>
        <br/> */}
        <div className="project-p">
        <p>Instagram but with a calendar. 
          Get social with PalCal- a network for friends to snoop on each other's personal, 
          yet mildly public calendar. 
          RSVP to the same events they are attending, 
          create and host your own, or browse and filter through category via the event database!
        </p>
        </div>
        </div>

        {/* <br/>
        <br/> */}
        <div className="projects">
        <a href="https://loo-review.netlify.app/" target="_blank" className="hover-link">
        <img src="https://i.ibb.co/qmntqK2/Screen-Shot-2021-07-26-at-4-28-38-PM.png"/>
        </a>
        <br/>
        {/* <a href="https://youtu.be/V3wfNaC8CMA" target="_blank">Demo</a> | <a href="">GitHub</a> */}
        <div className="project-p">
        <p>
        It’s tough finding a restroom in big cities like New York.
         Loo Review is your go-to app to locate available restrooms for when 
         you desperately need one. With features like filter by borough and reviews from other users,
         let Loo Review be part of your next trip to the Big Apple!
        </p>
        </div>
        </div>

        {/* <br/>
        <br/> */}

        <div className="projects">
        {/* <img src="https://i.ibb.co/DKMgB2Z/Screen-Shot-2021-07-26-at-4-34-11-PM.png"/> */}
        <a href="https://pkmn-memory-game.netlify.app/" target="_blank">
        <img src="https://i.ibb.co/tCbXD78/Screen-Shot-2021-07-26-at-4-32-41-PM.png"/>
        </a>
        <br/>
        {/* <a href="https://youtu.be/2QiH4q0-KcA" target="_blank">Demo</a> | <a href="">GitHub</a> */}
        <div className="project-p">
        <p>
          Simple Pokemon-themed memory game. 
          <br/>
          <br/>
          Match Gengar, Snorlax, Lickitung, Grimer, Omanyte and Cubone to it's corresponding pair to catch the Pokemon!
        </p>
        </div>
        </div>

        {/* <br/>
        <br/> */}

        <div className="projects">
        <a href="https://moviesfrom2004.netlify.app/" target="_blank">
        <img src="https://i.ibb.co/XZ73RZK/Screen-Shot-2021-07-26-at-8-54-37-PM.png"/>
        </a>
        <br/>
        {/* <a href="https://youtu.be/1sezCSgZYDs" target="_blank">Demo</a> | <a href="">GitHub</a> */}
        <div className="project-p">
        <p>
        All Movies (but only from 2004) dedicates and provides movies released in 2004-
        the best year for movies! Users are able to browse  movies through categories, 
        add and delete movies and view movie trailers. 
        </p>
        </div>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
}

export default Projects;