<?php
$servername = "cv9.h.filess.io";
$username = "kappa_herfortywe";
$password = "f9880c608fe34ac102a612d06f05235a7c801275";
$count = json_decode(countClients, true);

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>