<?php

include('koneksi.php');

extract($_POST);
//$_POST['name'] $_POST['desc']
$akun_username = $_POST['akun_username'];
$cerbung_idcerbung= $_POST['cerbung_idcerbung'];

$stmt = $conn->prepare("INSERT INTO following(akun_username,cerbung_idcerbung)VALUES(?,?);");

$stmt->bind_param("si", $akun_username, $cerbung_idcerbung);
if ($stmt->execute()) {
   $arr = ["result" => "success"];
} else {
   $arr = ["result" => "error", "message" => "Gagal simpan data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
?>