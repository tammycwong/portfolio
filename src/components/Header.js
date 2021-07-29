import React from 'react';
import Typical from 'react-typical';

function AboutMe() {

    return (
    <div>
      <div className="header">
        <h2 id="h2-header">I am Tammy Wong and I am a{' '}</h2>
        <h3 className="typing-demo">
          <Typical
          loop= {Infinity}
          wrapper="b"
          steps={[
            'full stack engineer.',
            1800,
            'web developer.',
            1800,
            'hard worker.',
            1800,
            'curious individual.',
            1800,
            'leader.',
            1800,
            'hot cheetos advocate.',
            1800,
          ]}
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