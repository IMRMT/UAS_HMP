<?php
include('koneksi.php');
$name = $_GET['name'];
$sql = "SELECT l.*,a.username,a.url,YEAR(a.created_at) as created_at FROM likes l INNER JOIN 
        akuns a ON a.username=l.akun_username INNER JOIN following_user fu ON fu.akun_follow=a.username
        WHERE fu.akun_username_f='$name'";
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