<?php

include('koneksi.php');

extract($_POST);
//$_POST['name'] $_POST['desc']
$stmt = $conn->prepare(
"INSERT INTO akuns (username, password, url, like) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssi", $username, $password, $url, $like);
if ($stmt->execute()) {
   $arr=["result"=>"success"];
} else {
   $arr= ["result"=>"error","message"=>"Gagal simpan data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
?>