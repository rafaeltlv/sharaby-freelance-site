export function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Create email body
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Display a success message
  alert("Form submitted successfully.");

  // You can perform additional actions here after successful submission
}

document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the form element
  const form = document.getElementById("myForm");

  // Check if the form element exists
  if (form) {
    // Attach the event handler function to the form submission event
    form.addEventListener("submit", handleSubmit);
  } 
});
