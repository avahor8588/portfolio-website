// SocialLinks.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialLinks.css'

function SocialLinks() {
    return (
      <div className="social-links">
        <a href="https://github.com/avahor8588" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faGithub} size="5x" /> {/* GitHub Icon */}
        </a>
        <a href="https://www.linkedin.com/in/aamil-vahora-a11308207" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faLinkedin} size="5x" /> {/* LinkedIn Icon */}
        </a>
        <a href="https://www.instagram.com/aamil.v/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faInstagram} size="5x" /> {/* Instagram Icon */}
        </a>

      </div>
    );
  }
  
  export default SocialLinks;