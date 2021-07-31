import React, { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects({ isOpen, setIsOpen, setActiveVideo, activeVideo }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="projects-section">
      <div className="projects-container">
        <h2 data-aos="fade-left">Projects</h2>
        <div className="horizontal-bar" data-aos="fade-left"></div>

        <div className="projects" data-aos="">
          <img
            className="project-image"
            src="https://i.ibb.co/2qwjRTb/Screen-Shot-2021-07-26-at-3-53-08-PM.png"
          />
          <br />
          <div class="overlay"></div>
          <div class="project-details fadeIn-bottom">
            <h3 className="project-title">palCal</h3>
            <h4 className="tools">React | Rails | JWT | Custom CSS</h4>

            <p className="project-p">
              Instagram but with a calendar; a network
              for friends to snoop on each other's personal, yet mildly private
              event calendar.
            </p>
            <div className="icon-align">
            <a
              href="https://github.com/tammycwong/frontend_events"
              target="_blank"
            >
              <img
                className="icon"
                src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
              />
            </a>

            <a
              onClick={() => {
                setIsOpen(true);
                setActiveVideo("4YpLQZZIsIM");
              }}
              className="demo"
            >
              <img
                className="icon"
                src="https://www.entizersportz.com/wp-content/uploads/2017/10/demo-video-icon.png"
              />
            </a>
            </div>
            <div className="view-button">
              <a href="" class="project-site disable" target="_blank">
                View Site
              </a>
            </div>
          </div>
        </div>

        <div className="projects" data-aos="">
          <img
            class="project-image"
            src="https://i.ibb.co/qmntqK2/Screen-Shot-2021-07-26-at-4-28-38-PM.png"
          />
          <br />
          <div class="overlay"></div>
          <div class="project-details fadeIn-bottom">
            <h3 className="">Loo Review: New York City</h3>
            <h4 className="tools">React | Custom CSS</h4>

            <br />

            <p className="project-p">
              Loo Review is your go-to app for locating available restrooms in
              New York City when you desperately need one.
            </p>

            <div className="icon-align">
              <a
                href="https://github.com/pjhg14/Phase-2-rr-location-frontend"
                target="_blank"
              >
                <img
                  className="icon"
                  src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
                />
              </a>

              <a
                onClick={() => {
                  setIsOpen(true);
                  setActiveVideo("V3wfNaC8CMA");
                }}
                className="demo"
              >
                
                <img
                  className="icon"
                  src="https://www.entizersportz.com/wp-content/uploads/2017/10/demo-video-icon.png"
                />
              </a>
              </div>
              <div class="view-button">
              <a
                href="https://loo-review.netlify.app/"
                target="_blank"
                className="project-site"
                target="_blank"
              >
                View Site
              </a>
            </div>
          </div>
        </div>

        <div className="projects" data-aos="">
          {/* <img src="https://i.ibb.co/DKMgB2Z/Screen-Shot-2021-07-26-at-4-34-11-PM.png"/> */}
          <img
            className="project-image"
            src="https://i.ibb.co/d4PYrZb/Screen-Shot-2021-07-31-at-3-41-20-PM.png"
          />
          <div className="overlay"></div>
          <div className="project-details fadeIn-bottom">
            <h3>Pokemon Memory Game</h3>
            <h4 className="tools">JavaScript | Custom CSS</h4>

            <p className="project-p">
              Simple Pokemon-themed memory game.
              <br />
              Match Pokemon to it's corresponding pair to catch them!
            </p>
            <div className="view-button">
              <a
                href="https://pkmn-memory-game.netlify.app/"
                class="project-site"
                target="_blank"
              >
                View Site
              </a>
            </div>
            <div className="icon-align">
            <a
              href="https://github.com/tammycwong/pokemon-memory-game"
              target="_blank"
            >
              <img
                className="icon"
                src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
              />
            </a>

            <a href="" target="_blank" className="disable">
              <img
                className="icon"
                src="https://www.entizersportz.com/wp-content/uploads/2017/10/demo-video-icon.png"
              />
            </a>
            </div>
           
          </div>
        </div>

        <div data-aos="" className="projects">
          <img src="https://i.ibb.co/XZ73RZK/Screen-Shot-2021-07-26-at-8-54-37-PM.png" />
          <br />
          <div className="overlay"></div>
          <div className="project-details fadeIn-bottom">
            <h3>All Movies (but only from 2004)</h3>
            <h4 className="tools">JavaScript | Custom CSS</h4>

            

            <p className="project-p">
              All Movies (but only from 2004) dedicates and provides movies
              released in 2004- the best year for movies!
            </p>

            <div className="icon-align">
            <a
              href="https://github.com/adamberard24/front-end-with-AdamandTammy"
              target="_blank"
            >
              <img
                className="icon"
                src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
              />
            </a>

            <a
              onClick={() => {
                setIsOpen(true);
                setActiveVideo("1sezCSgZYDs");
              }}
              className="demo"
            >
              <img
                className="icon"
                src="https://www.entizersportz.com/wp-content/uploads/2017/10/demo-video-icon.png"
              />
            </a>

            </div>
            <div className="view-button">
              <a
                href="https://moviesfrom2004.netlify.app/"
                class="project-site"
                target="_blank"
              >
                View Site
              </a>
            </div>
          </div>
        </div>

        {/* <div data-aos="fade-up" className="projects">
          <img src="https://i.ibb.co/DGxQH9L/Screen-Shot-2021-07-29-at-3-02-52-PM.png" />
          <br />
          <div className="overlay"></div>
          <div className="project-details fadeIn-bottom">
            <h3>Neopets 90s Reboot</h3>
            <h4 className="tools">React | Ruby on Rails</h4>
            <a className="disable" href="" target="_blank">
              <img
                className="icon"
                src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
              />
            </a>

            <a className="disable" href="" target="_blank">
              <img
                className="icon"
                src="https://www.entizersportz.com/wp-content/uploads/2017/10/demo-video-icon.png"
              />
            </a>

            <p className="project-p">
              Remember Neopets and dial-up? This is a revamp of the popular
              interactive website- bringing back nostalgia of childhood cartoons
              and toys.
            </p>
            <div className="view-button">
              <a
                href="https://moviesfrom2004.netlify.app/"
                className="project-site disable"
                target="_blank"
              >
                View Site
              </a>
            </div>
          </div>
        </div>

        <div className="projects" data-aos="fade-up">
          <img src="https://i.ibb.co/K28F2Zw/Screen-Shot-2021-07-28-at-11-29-28-AM.png" />
          <br />
          <div className="overlay"></div>
          <div className="project-details fadeIn-bottom">
            <h3 className="">Life in Quarantine</h3>
            <h4 className="tools">HTML | CSS | JavaScript</h4>
            <a href="https://github.com/tammycwong/my-website" target="_blank">
              <img
                className="icon"
                src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
              />
            </a>
            <a href="" target="_blank" className="disable">
              <img
                className="icon"
                src="https://www.entizersportz.com/wp-content/uploads/2017/10/demo-video-icon.png"
              />
            </a>
            <br />
            <p className="project-p">
              Tried to find myself in quarantine. This is a gallery that
              documents how I handled the pandemic. */}
        {/* (Flatiron Software Bootcamp Pre-Work) We all handled quarantine during the pandemic either in our own way,
                or exactly the same- trends fueled by instagram and tik tok. I tried to find myself in those times and 
                this is the gallery I made to document it.  */}
        {/* </p>
            <div className="view-button">
              <a
                href="https://tammycwong.github.io/my-website/"
                target="_blank"
                class="project-site"
              >
                View Site
              </a>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Projects;
