<?php
include('koneksi.php');
$id = $_GET['id'];

$sql = "SELECT a.username, a.url, c.judul, c.url_cerbung from akuns a 
inner join req_restrict r on r.nama_user=a.username 
inner join cerbungs c on c.idcerbung = r.id_cerbung where r.id_cerbung = $id; ";
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