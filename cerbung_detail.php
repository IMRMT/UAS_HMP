<?php
include("koneksi.php");
$id = $_GET['id'];
$sql = "SELECT * FROM cerbungs where id=$id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
echo json_encode($data);
$conn->close();
?>