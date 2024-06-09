<?php
$servername = "sql204.infinityfree.com";
$username = "if0_35908690_kappa";
$password = "Torv1234x";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$count = json_decode($details, true);
?>