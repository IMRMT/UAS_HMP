<?php
include('koneksi.php');
$name = $_GET['name'];
$sql = "SELECT c.idcerbung,c.judul,c.url_cerbung,c.deskripsi,c.genre,c.fk_username FROM `cerbungs` c 
        INNER JOIN following f ON c.idcerbung=f.cerbung_idcerbung WHERE f.akun_username='$name'";
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