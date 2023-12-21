<?php
include('koneksi.php');
extract($_POST);
//$_POST['name'] $_POST['desc']
$stmt = $conn->prepare("INSERT INTO cerbungs (judul, deskripsi, genre, 
                        paragraf, url_cerbung, akses, like) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssii", $judul, $deskripsi, $genre, $paragraf, $url_cerbung, $akses, $like);
if ($stmt->execute()) {
   $arr=["result"=>"success"];
} else {
   $arr= ["result"=>"error","message"=>"Gagal simpan data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
?>