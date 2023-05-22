<?php
// Database credentials
$servername = "localhost"; // Replace with your servername
$username = "your_username"; // Replace with your username
$password = "your_password"; // Replace with your password
$dbname = "your_database_name"; // Replace with your database name

// Create a new PDO or MySQLi connection
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  // Handle the connection error
  echo "Connection failed: " . $e->getMessage();
  exit();
}
?>
