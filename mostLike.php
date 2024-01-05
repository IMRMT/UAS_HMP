<?php
include("koneksi.php");

$sql = "SELECT l.*,a.username,a.url,YEAR(a.created_at) as created_at 
        FROM likes l INNER JOIN akuns a ON a.username=l.akun_username";
$result = $conn->query($sql);
// $data = $result->fetch_assoc();
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>