import React from "react";
import Typewriter from "typewriter-effect";

function AboutMe() {
  return (
    <div>
      <div className="header">
        <h2 id="h2-header">I am Tammy Wong and I am </h2>
        <div className="typing-demo">
          <Typewriter
            id="typing"
            options={{
              strings: [
                "a full stack engineer.",
                "trying my best.",
                "a Potterhead.",
                "an air fryer enthusiast.",
                "a hot cheetos advocate.",
                "obsessed with SVU.",
                "a Pokemon master.",
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
