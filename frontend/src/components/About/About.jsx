// src/components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About the Plant Disease Recognition System</h1>
      <p>
        The Plant Disease Recognition System is designed to provide quick, accurate, and efficient detection of plant diseases using the power of artificial intelligence and machine learning. We aim to empower farmers, researchers, and agriculture enthusiasts with a simple tool that can diagnose plant health issues and suggest remedies to ensure healthy crops.
      </p>

      <h2>Our Team</h2>
      <p>
        Our team consists of machine learning experts, web developers, and agricultural scientists, all working together to create a system that benefits farmers worldwide. Our mission is to make plant disease diagnosis easier, faster, and more accessible.
      </p>

      <h2>Our Goals</h2>
      <ul>
        <li><strong>Make Disease Detection Accessible:</strong> We believe that plant disease diagnosis should be available to everyone, anywhere.</li>
        <li><strong>Leverage AI:</strong> By using machine learning, we can enhance the accuracy and speed of disease recognition.</li>
        <li><strong>Improve Agricultural Outcomes:</strong> Our goal is to help farmers improve their yields by quickly identifying issues before they become severe.</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        Have any questions or feedback? Feel free to reach out to us at <strong>contact@plantdisease.com</strong>.
      </p>
    </div>
  );
};

export default About;
