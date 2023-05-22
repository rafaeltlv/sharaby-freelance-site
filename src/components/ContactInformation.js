import React from 'react';
import '../contact-information.css'; // Update the file path if needed

const ContactInformation = () => {
  return (
    <section className="contact-information" id="contact-information">
      {<div className="container">
            <div className="col-md-6">
              <h5 className="contact-information">Contact Information</h5>
              <p>Email: info@sharaby.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
}
    </section>
  );
};

export default ContactInformation;
