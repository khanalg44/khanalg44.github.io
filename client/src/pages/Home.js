import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="section-content">
      <div className="home-container">
        <div className="home-text">
          <h2>I am a quantitative analyst interested in quantum computing and cricket data analysis.</h2>
          <p>I am a quantitative analyst (quant) currently working at Citigroup, NYC. I hold a PhD in physics where I developed numerical libraries to study the fascinating world of quantum materials. Not only our tool explained the complicated physical properties of real materials, our tool was also shown to have a robust predictive ability. Learn more about my PhD Work <a href="http://hauleweb.rutgers.edu/tutorials/Tutorial_phonons.html" target="_blank" rel="noopener noreferrer">here</a>. I am passionate about cricket data analysis and learning about the world of finance through an economic lens around the world.</p>
        </div>
        <div className="home-image">
          <img src="/images/profilepic1.jpg" alt="Ghanashyam Khanal" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;