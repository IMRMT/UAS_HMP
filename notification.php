<?php
include('koneksi.php');
$name = $_GET['name'];

$sql = "SELECT r.* FROM req_restrict r INNER JOIN cerbungs c ON r.id_cerbung=c.idcerbung WHERE 
        c.fk_username='$name' AND r.keterangan='menunggu';";
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