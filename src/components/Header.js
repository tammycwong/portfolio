import React from "react";
import Typical from "react-typical";

function AboutMe() {
  return (
    <div>
      <div className="header">
        <h2 id="h2-header">I am Tammy Wong and I am a </h2>
        <div className="typing-demo">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "full stack engineer.",
              1800,
              "web developer.",
              1800,
              "hot cheetos advocate.",
              1800,
              "plant mom.",
              1800,
              "land mammal.",
              1800,
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
