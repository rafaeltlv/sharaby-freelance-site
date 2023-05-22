// src/components/App.js
import React, { useEffect } from 'react'; // Import useEffect from the react module
import Header from './Header';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ContactForm from './ContactForm'; // Import the SubmitForm component
import { handleSubmit } from '../SubmitForm';
import FollowUs from './FollowUs';
import ContactInformation from './ContactInformation';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import CookieUtils from '../CookieUtils'; // Import the CookieUtils object

const App = () => {
  useEffect(() => {
    CookieUtils.init(); // Call the init function to initialize cookie-related functionality
  }, []);


  return (
    <div className="App">
      <CookieBanner />
      <Header />
      <Services />
      <AboutUs />
      <ContactUs />
      <ContactForm handleSubmit={handleSubmit} />
      <FollowUs />
      <ContactInformation />
      <Footer />
    </div>
  );
};

export default App;
