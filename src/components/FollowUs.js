import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../follow-us.css'; // Update the file path if needed

const FollowUs = () => {
  return (
    <section className="follow-us" id="follow-us">
      <div className="container">
        <div className="col-md-6">
          <h3>Follow Us</h3>
          <ul className="list-unstyled">
            <li><button> <FontAwesomeIcon icon={faFacebookF} /></button></li>
            <li><button> <FontAwesomeIcon icon={faTwitter} /></button></li>
            <li><button> <FontAwesomeIcon icon={faInstagram} /></button></li>
            <li><a href="https://www.linkedin.com/in/adriel-sharaby-58a75a208/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
