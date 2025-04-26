<?php
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["file"]["name"]);
$response = [];

if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
  $response["success"] = true;
  $response["filename"] = htmlspecialchars(basename($_FILES["file"]["name"]));
} else {
  $response["success"] = false;
  $response["error"] = "Failed to upload file.";
}

echo json_encode($response);
?>
