function hasConsentedToCookies() {
  const cookies = document.cookie.split(";").map(cookie => cookie.trim());
  return cookies.includes("cookieConsent=true");
}

window.addEventListener("DOMContentLoaded", function() {
  if (!hasConsentedToCookies()) {
    document.getElementById('cookieOverlay').style.display = 'block';
  }
});

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function acceptCookies() {
  setCookie("cookieConsent", "true", 30);
  document.getElementById('cookieOverlay').style.display = 'none';
}
