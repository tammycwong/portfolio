import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


function AboutMe() {

    return (
    <section id="about-section">
      <div className="container">
    <div className="aboutme-container">
      <h2 data-aos="fade-left">About Me</h2>
       <div className="horizontal-bar" data-aos="fade-down"></div>
        <div className="aboutme-details">
          <p className="aboutme">
            A career changer from hospitality management to tech.<br/>
            Based in Brooklyn, New York.<br/>
            I have a passion for creating fun yet beneficial applications-<br/>
            it is exhilarating being able to build inspiring and engaging products.
            <br/>

            <br/>
             I first started coding when I was 15, personalizing my layouts for my blog platforms- Xanga and LiveJournal. <br/>
             I loved changing themes to my site through custom banners, mp3s and dynamic styling with JavaScript and CSS. <br/>
             Each layout taylored to my current mood as an angsty teen.<br/>
            <br/>
             My background in cognitive and behaviorial psychology helps me understand the human mind and how it works with user experience.<br/>
             Managing a staff of over 80 service professionals, I have a keen understanding of how to create a
             positive and engaging work environment. <br/>
             <br/>
             PS: I lived a life without Google.
           </p>

           <div className="profile-pic-container">
            <img className="profile-pic" src="https://i.ibb.co/FH2FfCS/Screen-Shot-2021-07-29-at-2-39-46-PM.png"/>
           </div>

           <div id="framework">
            <h3 className="inline">Programming languages:</h3>
            <div data-aos="fade-left">
            <img className="programming-icons" src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png"/>
            <img className="programming-icons" src="https://www.rapiddg.com/sites/default/files/imce-files/react.png"/>
            <img className="programming-icons" src="https://dctacademy.com/wp-content/uploads/2015/06/ruby-logo.png"/>
            <img className="programming-icons" src="https://avatars.githubusercontent.com/u/4223"/>
            </div>
            <h3>Tools:</h3>
            <div data-aos="fade-right">
            <img className="programming-icons" src="https://www.postgresql.org/media/img/about/press/elephant.png"  alt="PostgreSQL" title="PostgreSQL"/>
            <img className="programming-icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png" alt="SQLite" title="SQLite"/>
            <img className="programming-icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png" alt="Figma" title="Figma"/>
            <img className="programming-icons" src="https://jwt.io/img/pic_logo.svg"  alt="JWT" title="JWT"/>
            <img className="programming-icons" src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png" width="55px" alt="GitHub" title="GitHub"/>
            <img className="programming-icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png"  alt="Adobe Creative Cloud" title="Adobe Creative Cloud"/>
            <img className="programming-icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"  alt="Git" title="Git"/>
            </div>
            
        </div>

      </div>
     </div>
     </div>
    </section>
    )
}

export default AboutMe;