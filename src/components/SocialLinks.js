// SocialLinks.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialLinks.css'

function SocialLinks() {
  return (
    <div className="social-links">
      <a className="social-link" href="https://github.com/avahor8588" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
        <span>GitHub</span>
      </a>
      <a className="social-link" href="https://www.linkedin.com/in/aamil-vahora-a11308207" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIn</span>
      </a>
      <a className="social-link" href="https://www.instagram.com/aamil.v/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
        <span>Instagram</span>
      </a>
    </div>
  );
}
  
  export default SocialLinks;