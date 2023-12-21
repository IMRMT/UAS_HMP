<?php

include('koneksi.php');

extract($_POST);
$stmt = $conn->prepare(
"SELECT username FROM akuns WHERE username=? and password=?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result()->fetch_assoc();
if(!empty($result)) {
    $arr = ["result" => "success", "username" => $result['username']];
}
else {
    $arr = ["result" => "error", "message" => "Invalid username or password"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
?>