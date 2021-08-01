import React from "react";
import Typewriter from 'typewriter-effect';

function AboutMe() {
  return (
    <div>
      <div className="header">
        <h2 id="h2-header">I am Tammy Wong and I am a </h2>
        <div className="typing-demo">
        
          <Typewriter
          options={{
            strings: ['software developer.', 
            'full stack engineer.',
            'hot cheetos advocate.',
            'land mammal.',
            'plant mom.',
          ],
            autoStart: true,
            loop: true,
          }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
