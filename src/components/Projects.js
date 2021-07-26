import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

function Projects() {

    return (
      <div>
        <h2>Projects:</h2>

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/4YpLQZZIsIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <img src="https://i.ibb.co/2qwjRTb/Screen-Shot-2021-07-26-at-3-53-08-PM.png"/>
        <ModalVideo
          channel = "youtube"
          autoplay
          isOpen={isOpen1}
          videoId="4YpLQZZIsIM"
          onClose={() => setOpen1(false)}
        />
        <span onClick={() => setOpen(true)}></span>
        <a href="https://youtu.be/4YpLQZZIsIM" target="_blank">Demo</a>
        <br/>
        <br/>
        <a href="https://loo-review.netlify.app/" target="_blank">
        <img src="https://i.ibb.co/qmntqK2/Screen-Shot-2021-07-26-at-4-28-38-PM.png"/>
        </a>
        <a href="https://youtu.be/V3wfNaC8CMA" target="_blank">Demo</a>

        <br/>
        <br/>
        {/* <img src="https://i.ibb.co/DKMgB2Z/Screen-Shot-2021-07-26-at-4-34-11-PM.png"/> */}
        <a href="https://pkmn-memory-game.netlify.app/" target="_blank">
        <img src="https://i.ibb.co/tCbXD78/Screen-Shot-2021-07-26-at-4-32-41-PM.png"/>
        </a>

      </div>
    );
}

export default Projects;