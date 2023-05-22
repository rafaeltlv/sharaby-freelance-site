document.addEventListener("DOMContentLoaded", function() {
    // Your code here
  
  
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Retrieve form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Create email body
      const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
      // Send email using an AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "send_email.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert("Email sent successfully.");
          // You can perform additional actions here after successful submission
        }
      };
      xhr.send(`body=${encodeURIComponent(body)}`);
    });
  });
  