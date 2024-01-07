import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light p-3 mt-5">
      <div className="row">
        <div className="col-md-6">
          <h5>Contact Us</h5>
          <p>Email: resumerise@gmail.com</p>
          <p>Phone: +34 123456789</p>
        </div>
        <div className="col-md-6 text-right">
          <h5>Follow Us</h5>
          <button className="btn btn-link text-light">
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className="btn btn-link text-light">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button className="btn btn-link text-light">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
