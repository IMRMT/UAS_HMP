<?php

include('koneksi.php');

extract($_POST);
//$_POST['name'] $_POST['desc']
$story_teller = $_POST['story_teller'];
$idc= $_POST['idc'];
$paragraf=$_POST['paragraf'];

$stmt = $conn->prepare("INSERT INTO add_paragraf (story_teller,id_cerbung,paragraf)VALUES(?,?,?)");

$stmt->bind_param("sis", $story_teller, $idc, $paragraf);
if ($stmt->execute()) {
   $arr = ["result" => "success"];
} else {
   $arr = ["result" => "error", "message" => "Gagal simpan data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
?>