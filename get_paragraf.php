<?php
include("koneksi.php");
$id = $_GET['id'];
$sql = "SELECT paragraf,story_teller FROM add_paragraf WHERE id_cerbung=$id";
$result = $conn->query($sql);
// $data = $result->fetch_assoc();
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>