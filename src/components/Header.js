import React from 'react';
import '../header.css'; // Update the file path if needed

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="base.html">Sharaby</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#header">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Sharaby Strategy and Growth Firm</h2>
              <h3 className="lead">Unlock your growth potential with our digital advertising experience</h3>
              <a href="#services" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
