// src/pages/About.jsx
import React from 'react';
import bearImage from '../assets/bear.png';

const About = () => {
    return (
      <div class="container">
        <h1>About Me</h1>
        <p>Welcome to my portfolio! Here you can learn more about me and my work.</p>
        <img src={bearImage} alt="Bear Waving" style={{ width: '100px', height: 'auto' }} /> 
      </div>
    );
  };

export default About;