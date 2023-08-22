import React from 'react';
import '../index.css';
import videoBackground from './assets/video.mp4'
function Header() {

return (
  <header className="header">
    
      <video autoPlay muted loop className="video-background">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay-content">
        <h1>Welcome to KED Bakery</h1>
        <h2>Delicious treats baked with love</h2>
      </div>
    </header>
    );
  }


export default Header;
