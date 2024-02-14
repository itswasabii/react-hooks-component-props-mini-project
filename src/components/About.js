// About.js

import React from 'react';

function About(props) {
  return (
    <div>
      <img src={props.blogLogo || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{props.aboutText}</p>
    </div>
  );
}

export default About;
