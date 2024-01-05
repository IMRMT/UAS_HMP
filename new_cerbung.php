<?php
include('koneksi.php');
extract($_POST);
//$_POST['name'] $_POST['desc']
$judul=$_POST['judul'];
$deskripsi=$_POST['deskripsi'];
$genre=$_POST['genre'];
$paragraf=$_POST['paragraf'];
$url_cerbung=$_POST['url_cerbung'];
$akses=$_POST['akses'];
$fk_username=$_POST['fk_username'];

$stmt = $conn->prepare("INSERT INTO cerbungs(judul,deskripsi,genre,paragraf,url_cerbung,akses,fk_username) VALUES (?, ?, ?, ?, ?, ?, ?);");
$stmt->bind_param("sssssss", $judul, $deskripsi, $genre, $paragraf, $url_cerbung, $akses, $fk_username);
if ($stmt->execute()) {
   $arr=["result"=>"success"];
} else {
   $arr= ["result"=>"error","message"=>"Gagal simpan data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
?>