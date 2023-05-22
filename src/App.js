import React from 'react';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="base.html">Sharaby</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
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
      <div id="cookieOverlay">
        <div id="cookieBanner">
          <p>This website uses cookies to ensure you get the best experience. By continuing to browse the site, you are agreeing to our use of cookies.</p>
          <button onClick={acceptCookies}>Accept</button>
        </div>
      </div>
      <section className="services" id="services">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <img src="campaign_management.jpeg" alt="Service 2" className="card-img-top" />
                    <div className="card-body">
                      <h3 className="card-title">Campaign Management</h3>
                      <p className="card-text">We manage and optimize your digital advertising campaigns to achieve maximum results</p>
                      <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <img src="social_media_adv.jpeg" alt="Service 3" className="card-img-top" />
                    <div className="card-body">
                      <h3 className="card-title">Social Media Advertising</h3>
                      <p className="card-text">We create and manage social media advertising campaigns to reach your target audience</p>
                      <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <img src="growth_strategy.jpeg" alt="Service 4" className="card-img-top" />
                    <div className="card-body">
                      <h3 className="card-title">Growth Strategy</h3>
                      <p className="card-text">We optimize your marketing efforts for rapid growth and increased ROI.</p>
                      <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="contact-us" id="contact-us">
        <div className="container">
          <h2 className="text-center mb-5">Contact Us</h2>
          <div className="col-md-6">
            <h4>Get In Touch</h4>
            <p>Have a question or want to learn more about our services? Fill out the form below, and we'll get back to you as soon as possible.</p>
            <form id="myForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <br />
        </div>
      </section>
      <section className="follow-us" id="follow-us">
        <div className="container">
          <div className="col-md-6">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/adriel-sharaby-58a75a208/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-information" id="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Contact Information</h3>
              <p><i className="fas fa-map-marker-alt"></i> 123 Main St, City, Country</p>
              <p><i className="fas fa-envelope"></i> info@example.com</p>
              <p><i className="fas fa-phone-alt"></i> +1234567890</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2023 Sharaby Strategy and Growth Firm. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
