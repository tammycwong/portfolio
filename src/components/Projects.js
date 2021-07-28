import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Projects() {
  const [isOpen, setOpen] = useState(false)

    return (
      <div className="projects-container">

        <h2>Projects</h2>
        <div className="projects">
        <img class ="project-image" src="https://i.ibb.co/2qwjRTb/Screen-Shot-2021-07-26-at-3-53-08-PM.png"/>
        <br/>
        <div class="overlay"></div>
        <div class ="project-details fadeIn-bottom">
          <h3>palCal</h3>
          <h4 className="tools">React | Rails </h4>
            <a href="https://github.com/tammycwong/frontend_events">
            <img 
            className="icon" 
            src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
            />
            </a>
            
          {/* video modal */}
            <a href="https://youtu.be/4YpLQZZIsIM">
              <img 
              className="icon"
              src="https://pic.onlinewebfonts.com/svg/img_199595.png"
              />
            </a>
          
          <p className="project-p">Instagram but with a calendar. 
          Get social with PalCal- a network for friends to snoop on each other's personal, 
          yet mildly public calendar. 
          RSVP to the same events they are attending, 
          create and host your own, or browse and filter through category via the event database!
        </p>
          <a href="" class="project-title" target="_blank">View Site</a>
        </div>

        {/* <a href="https://youtu.be/4YpLQZZIsIM" target="_blank">Demo</a> | <a href="">GitHub</a>
        <br/> */}
        {/* <div className="project-p">
        <p>Instagram but with a calendar. 
          Get social with PalCal- a network for friends to snoop on each other's personal, 
          yet mildly public calendar. 
          RSVP to the same events they are attending, 
          create and host your own, or browse and filter through category via the event database!
        </p>
        </div> */}
        </div>


        <div className="projects">
        <img class="project-image" src="https://i.ibb.co/qmntqK2/Screen-Shot-2021-07-26-at-4-28-38-PM.png"/>
        <br/>
        <div class="overlay"></div>
        <div class="project-details fadeIn-bottom">
          <h3 className="">Loo Review: New York City</h3>
          <h4 className="tools">React</h4>

          <a href="https://github.com/pjhg14/Phase-2-rr-location-frontend" target="_blank">
            <img 
            className="icon" 
            src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
            />
            </a>
            
          {/* video modal */}
            <a href="https://youtu.be/4YpLQZZIsIM" target="_blank">
              <img 
              className="icon"
              src="https://pic.onlinewebfonts.com/svg/img_199595.png"
              />
            </a>
        {/* <a href="https://loo-review.netlify.app/" target="_blank" className="hover-link">
       
        </a> */}
        <br/>
        
    
        {/* <a href="https://youtu.be/V3wfNaC8CMA" target="_blank">Demo</a> | <a href="">GitHub</a> */}
        <p className="project-p">
        It’s tough finding a restroom in big cities like New York.
         Loo Review is your go-to app to locate available restrooms for when 
         you desperately need one. With features like filter by borough and reviews from other users,
         let Loo Review be part of your next trip to the Big Apple!
        </p>
        <a href="https://loo-review.netlify.app/" target="_blank" class="project-title" target="_blank">View Site</a>
        </div>
        </div>

        <div className="projects">
        {/* <img src="https://i.ibb.co/DKMgB2Z/Screen-Shot-2021-07-26-at-4-34-11-PM.png"/> */}
        <img className="project-image" src="https://i.ibb.co/tCbXD78/Screen-Shot-2021-07-26-at-4-32-41-PM.png"/>
        <div className="overlay"></div>
        <div class="project-details fadeIn-bottom">
          <h3>Pokemon Memory Game</h3>
          <h4 className="tools">JavaScript</h4>
          <a href="https://github.com/tammycwong/pokemon-memory-game" target="_blank">
            <img 
            className="icon" 
            src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
            />
            </a>

            <a href="" target="_blank">
              <img 
              className="icon"
              src="https://pic.onlinewebfonts.com/svg/img_199595.png"
              />
            </a>
        <br/>

        <p className="project-p">
          Simple Pokemon-themed memory game. 
          <br/>
          <br/>
          Match Gengar, Snorlax, Lickitung, Grimer, Omanyte and Cubone to it's corresponding pair to catch the Pokemon!
        </p>
        <a href="https://pkmn-memory-game.netlify.app/" class="project-title" target="_blank">View Site</a>
        </div>
        </div>

        <div className="projects">
        <img src="https://i.ibb.co/XZ73RZK/Screen-Shot-2021-07-26-at-8-54-37-PM.png"/>
        <br/>
        <div class="overlay"></div>
        <div class ="project-details fadeIn-bottom">
          <h3>All Movies (but only from 2004)</h3>
          <h4 className="tools">JavaScript</h4>
            <a href="https://github.com/adamberard24/front-end-with-AdamandTammy" target="_blank">
            <img 
            className="icon" 
            src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
            />
            </a>

            <a href="https://youtu.be/1sezCSgZYDs" target="_blank">
              <img 
              className="icon"
              src="https://pic.onlinewebfonts.com/svg/img_199595.png"
              />
            </a>

        <p className="project-p">
        All Movies (but only from 2004) dedicates and provides movies released in 2004-
        the best year for movies! Users are able to browse  movies through categories, 
        add and delete movies and view movie trailers. 
        </p>
        <a href="https://moviesfrom2004.netlify.app/" class="project-title" target="_blank">View Site</a>
        </div>
        {/* <React.Fragment>
			    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="V3wfNaC8CMA" onClose={() => setOpen(false)} />
          <span onClick={()=> setOpen(true)}>VIEW DEMO</span>
		    </React.Fragment> */}
      </div>
      </div>
    );
}

export default Projects;