import React from 'react';
import '../index.css';
import Feed from './Feed';
import Call from './Call';
function Footer() {
  return (
    <div>
      <Feed/>
      
    <footer className="footer">
      &copy; {new Date().getFullYear()} KED Bakery. All rights reserved.
    </footer>
    </div>
  );
}

export default Footer;
