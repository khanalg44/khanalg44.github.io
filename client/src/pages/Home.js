import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="section-content">
      <div className="home-container">
        <div className="home-text">
          <h2>Hi there,</h2>
          <p>I am a quantitative analyst currently working at Citigroup in New York City, where I build libraries for pricing, quantitative risk analysis, and stress testing. I hold a PhD in Physics, where I developed numerical libraries to study quantum materials and their properties. I am passionate about cricket data analysis, quantum computing, and understanding global financial markets through an economic lens.</p>
          
          <p style={{ marginTop: '2rem' }}>Feel free to connect with me on <a href="https://www.linkedin.com/in/ghanashyam-khanal/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my projects on <a href="https://github.com/khanalg44/" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>
        <div className="home-image">
          <img src="/images/profilepic4.jpg" alt="Ghanashyam Khanal" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;