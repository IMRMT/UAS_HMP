<?php
include('koneksi.php');
$get = "%".$_GET['search']."%";
$sql = "SELECT * FROM akuns WHERE username LIKE '$get'";
$result = $conn->query($sql);
$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
$conn->close();
?>