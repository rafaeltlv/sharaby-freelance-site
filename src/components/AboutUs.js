import React from 'react';
import '../components_css/about-us.css'; // Update the file path if needed

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us-div">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p className="lead">Sharaby Strategy Growth firm is a boutique digital marketing agency with the mission to increase revenues with our esteemed clients. With years of experience and management of funds exceeding 8 figures, we aim to bring your growth-related goals to fruition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;