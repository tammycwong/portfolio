/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "aos/dist/aos.css";
import me from "images/me.png";
import creativeSuites from "images/tools/adobe_creative_suites.png"
import elephant from "images/tools/elephant.png"
import postman from "images/tools/postman.png"
import figma from "images/tools/figma.png"
import git from "images/tools/git.png"
import sqlite from "images/tools/sqlite.png"
import react from "images/languages/react.png"
import css from "images/languages/css.png"
import html from "images/languages/html.png"
import javascript from "images/languages/javascript.png"
import ruby from "images/languages/ruby.png"
import rails from "images/languages/rails.png"


function AboutMe() {
  return (
    <section id="about-section">
      <div className="aboutme-container">
        <h2 data-aos="fade-up">About Me</h2>
        <div className="horizontal-bar" data-aos="fade-up"></div>
        <div className="aboutme-details">
          <a href="https://hackertyper.com/" target="_blank">
          <img
            className="profile-pic"
            src={me}
            alt="profile pic"
          />
          </a>

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

      
        </div>

        <div id="framework">
          <br/>
          <h3 className="inline">Programming languages:</h3>
          <img
            className="programming-icons"
            src={css}
            alt="CSS"
            title="CSS"
          />
          <img
            className="programming-icons"
            src={html}
            alt="HTML"
            title="HTML"
          />
          <img
            className="programming-icons"
            src={javascript}
            alt="JavaScript"
            title="JavaScript"
          />

          <img
            className="programming-icons"
            src={react}
            alt="React"
            title="React"
          />
          <img
            className="programming-icons"
            src={ruby}
            alt="Ruby"
            title="Ruby"
          />
          <img
            className="programming-icons"
            src={rails}
            alt="Ruby on Rails"
            title="Ruby on Rails"
          />
          <img 
          className="programming-icons"
          src="https://cdn-images-1.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png"
          alt="Sass"
          title="Sass"
          />

          <h3>Tools:</h3>
          <img
            className="programming-icons"
            src={elephant}
            alt="PostgreSQL"
            title="PostgreSQL"
          />
          <img
            className="programming-icons"
            src={sqlite}
            alt="SQLite"
            title="SQLite"
          />
          <img
            className="programming-icons"
            src={figma}
            alt="Figma"
            title="Figma"
          />
          <img
            className="programming-icons"
            src="https://jwt.io/img/pic_logo.svg"
            alt="JWT"
            title="JWT"
          />
          <img
            className="programming-icons"
            src={creativeSuites}
            alt="Adobe Creative Cloud"
            title="Adobe Creative Cloud"
          />
          <img
            className="programming-icons"
            src={git}
            alt="Git"
            title="Git"
          />
          <img
            className="programming-icons"
            src={postman}
            alt="Postman"
            title="Postman"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
