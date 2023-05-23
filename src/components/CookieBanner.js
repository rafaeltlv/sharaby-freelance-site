import React, { useEffect } from 'react';
import '../components_css/cookie-banner.css';
import CookieUtils from '../CookieUtils.js';

const CookieBanner = () => {
  const acceptCookies = () => {
    CookieUtils.acceptCookies();
  };

  useEffect(() => {
    CookieUtils.init();
  }, []);

  return (
    <div id="cookieOverlay">
      <div id="cookieBanner">
        <p>This website uses cookies to ensure you get the best experience. By continuing to browse the site, you are agreeing to our use of cookies.</p>
        <button onClick={acceptCookies}>Accept</button>
      </div>
    </div>
  );
};

export default CookieBanner;
