import React from 'react';
import '../footer.css'; // Update the file path if needed

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container" id="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Sharaby Strategy and Growth Firm. All rights reserved.</p>
            <ul className="list-unstyled" id="terms">
              <li><button>Privacy Policy</button></li>
              <li><button>Terms of Service</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
