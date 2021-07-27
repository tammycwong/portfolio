import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

function AboutMe() {

    return (
    <div>
      <div className="header">

        <h2>I am Tammy Wong and I am a </h2>
        <h3 className="typing-demo">
        {'\n'}
        <ReactTypingEffect
          text={[" software developer."]}
          typingDelay= {[1800]}
          eraseDelay= {[4000]}
        />

        </h3>
      </div>

    {/* I love creating applications that are fun and users can benefit from.<br/>
    I first started coding when I was 15, personalizing my layouts for my blog platforms- Xanga and LiveJournal. <br/>
    I loved changing themes to my site through custom banners, mp3s and dynamic styling with JavaScript and CSS. </p> */}
    </div>
    
    )
}

export default AboutMe;