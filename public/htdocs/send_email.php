<script src="checkCookies.js"></script>

<?php

// Include the database connection file
include 'db_connection.php';

if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $encodedMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
  echo $encodedMessage;


  // Perform input validation and sanitization
  if (empty($name) || empty($email) || empty($message)) {
    echo 'Please fill in all required fields.';
    exit;
  }

  // Validate email format
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Invalid email format.';
    exit;
  }

  // Restrict special characters in email (optional)
  if (preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $email)) {
    echo 'Email contains invalid characters.';
    exit;
  }

  // Limit number of words in the message
  $messageWordCount = str_word_count($message);
  $maxWords = 100; // Set the desired maximum number of words

  if ($messageWordCount > $maxWords) {
    echo 'Message exceeds the word limit.';
    exit;
  }

  // Additional logic for message limit
  $currentMessageCount = 10; // Replace with your actual logic to retrieve the count from the database or initialize it
  $messageLimit = 100; // Set the desired message limit

  if ($currentMessageCount >= $messageLimit) {
    echo 'Message limit exceeded. Please try again later.';
    exit;
  }

  // Prepare the SQL statement
  $stmt = $conn->prepare("INSERT INTO form_submissions (name, email, message) VALUES (?, ?, ?)");

  // Bind parameters
  $stmt->bind_param("sss", $name, $email, $message);

  // Execute the statement
  if ($stmt->execute()) {
    $to = 'adrielkaemon@yahoo.com';
    $subject = 'Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
      echo 'Email sent successfully.';
      $currentMessageCount++; // Increment the message count in the database or update the variable
    } else {
      echo 'Failed to send email.';
    }
  } else {
    echo 'Failed to insert form data into the database.';
  }

  // Close the statement
  $stmt->close();

  // Close the database connection
  $conn->close();
}
?>
