<?php
include("koneksi.php");
$id = $_GET['id'];
$sql = "SELECT DISTINCT paragraf FROM add_paragraf WHERE id_cerbung like $id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
echo json_encode($data);
$conn->close();
?>