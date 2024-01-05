<?php
include("koneksi.php");
$id = $_GET['id'];
$sql = "SELECT c.*,ap.* FROM cerbungs c INNER JOIN add_paragraf ap ON c.idcerbung=ap.id_cerbung 
        WHERE c.idcerbung=$id";
$result = $conn->query($sql);
$data = $result->fetch_assoc();
echo json_encode($data);
$conn->close();
?>