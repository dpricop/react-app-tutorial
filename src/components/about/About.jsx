import React from "react";

const About = (props) => {
  return (
    <div>
      <h1>{props.about.title}</h1>
      <p>{props.about.longText}</p>
    </div>
  );
};
export default About;
