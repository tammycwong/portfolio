import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


function AboutMe() {

    return (
    <div className="aboutme-container">
      <h2 data-aos="fade-left">About Me</h2>
        <div className="aboutme-details">
          <p className="aboutme">
            A career changer from hospitality management to tech.<br/>
            Based in Brooklyn, New York.<br/>
            I have a serious passion for creating fun yet beneficial applications-<br/>
            it is the most exhilarating experience building inspiring and engaging products.
            <br/>
      {/* One of my strengths is frontend engineering as well as conceptual thinking. <br/> */}
            <br/>
             I first started coding when I was 15, personalizing my layouts for my blog platforms- Xanga and LiveJournal. <br/>
             I loved changing themes to my site through custom banners, mp3s and dynamic styling with JavaScript and CSS. <br/>
             Each layout taylored to my current mood as an angsty teen.<br/>
            <br/>
             My background in cognitive and behaviorial psychology has helped me understand the human mind and how it works with user experience<br/>
           </p>



      <div className="">
        <img className="profile-pic" data-aos="fade-up" src="https://i.ibb.co/3CB8gn3/Screen-Shot-2021-07-28-at-2-14-41-PM.png"/>
      </div>

      </div>
    </div>
    
    )
}

export default AboutMe;