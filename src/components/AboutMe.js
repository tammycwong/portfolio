import React from "react";
import "aos/dist/aos.css";

function AboutMe() {
  return (
    <section id="about-section">
      <div className="aboutme-container">
        <h2 data-aos="fade-up">About Me</h2>
        <div className="horizontal-bar" data-aos="fade-up"></div>
        <div className="aboutme-details">
          {/* <div className="profile-pic-container"> */}
          <img
            className="profile-pic"
            // src="https://i.ibb.co/hCHq2jG/Screen-Shot-2021-07-30-at-12-00-31-PM.png"
            src="https://i.ibb.co/vd8p8rM/Screen-Shot-2021-08-01-at-11-43-45-AM.png"
            alt="profile pic"
          />
          {/* <img className="profile-pic" src="https://i.ibb.co/qsxjWp3/Screen-Shot-2021-07-30-at-12-01-49-PM.png"/> */}
          {/* </div> */}
          <p className="aboutme">
            <strong>//</strong>A career changer from hospitality management to tech.
            <br />
            <strong>//</strong>Born, bred and based in Brooklyn, New York. 
            <br />
            <br />

            I am a <strong>Software Engineer Flatiron School</strong> graduate with a passion for technology and
            creating fun yet beneficial applications-
            <br />
            it is exhilarating being able to build inspiring and engaging
            products.
            <br />
            <br />
            My background in <strong>cognitive and behaviorial psychology</strong> helps me
            understand the human mind and how it works with <strong>user experience</strong>.
            <br />
            <br/>
            Managing a staff of over 80 service professionals, I have a keen
            understanding of how to create a positive and engaging work
            environment. <br />
            <br/>
            I first started coding when I was 15, personalizing my layouts for
            my blog platforms- <strong>Xanga and LiveJournal.</strong> 
            <br />
            I loved changing themes to my site through custom banners, mp3s and
            dynamic styling with JavaScript and CSS. <br />
            Each layout tailored to my current mood as an angsty teen.

            <br />
            <br/>
            <strong>//</strong>PS: I lived a life without Google.
          </p>

          {/* <div className="profile-pic-container">
            <img
              className="profile-pic"
              // src="https://i.ibb.co/hCHq2jG/Screen-Shot-2021-07-30-at-12-00-31-PM.png"
              src ="https://i.ibb.co/vd8p8rM/Screen-Shot-2021-08-01-at-11-43-45-AM.png"
              alt="profile pic"
            />
            {/* <img className="profile-pic" src="https://i.ibb.co/qsxjWp3/Screen-Shot-2021-07-30-at-12-01-49-PM.png"/> */}
        </div>

        <div id="framework">
          <h3 className="inline">Programming languages:</h3>
          <img
            className="programming-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/2048px-Devicon-css3-plain.svg.png"
            alt="CSS"
            title="CSS"
          />
          <img
            className="programming-icons"
            src="https://image.flaticon.com/icons/png/512/732/732212.png"
            alt="HTML"
            title="HTML"
          />
          <img
            className="programming-icons"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
            alt="JavaScript"
            title="JavaScript"
          />

          <img
            className="programming-icons"
            src="https://www.rapiddg.com/sites/default/files/imce-files/react.png"
            alt="React"
            title="React"
          />
          <img
            className="programming-icons"
            src="https://dctacademy.com/wp-content/uploads/2015/06/ruby-logo.png"
            alt="Ruby"
            title="Ruby"
          />
          <img
            className="programming-icons"
            src="https://avatars.githubusercontent.com/u/4223"
            alt="Ruby on Rails"
            title="Ruby on Rails"
          />
          <h3>Tools:</h3>
          <img
            className="programming-icons"
            src="https://www.postgresql.org/media/img/about/press/elephant.png"
            alt="PostgreSQL"
            title="PostgreSQL"
          />
          <img
            className="programming-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png"
            alt="SQLite"
            title="SQLite"
          />
          <img
            className="programming-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
            alt="Figma"
            title="Figma"
          />
          <img
            className="programming-icons"
            src="https://jwt.io/img/pic_logo.svg"
            alt="JWT"
            title="JWT"
          />
          {/* <img
            className="programming-icons"
            src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
            width="55px"
            alt="GitHub"
            title="GitHub"
          /> */}
          <img
            className="programming-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png"
            alt="Adobe Creative Cloud"
            title="Adobe Creative Cloud"
          />
          <img
            className="programming-icons"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png"
            alt="Git"
            title="Git"
          />
          <img
            className="programming-icons"
            src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png"
            alt="Postman"
            title="Postman"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
