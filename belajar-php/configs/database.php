<?php

$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'pegawai';

// Membuat koneksi dengan database
$conn = mysqli_connect($host, $user, $pass, $db);

// Cek koneksi database
if (mysqli_connect_errno()) {
    die('' . mysqli_connect_error());
}

// // String query
// $sql = 'SELECT * FROM jabatan';
// // Perintah eksekusi query
// $results = mysqli_query($conn, $sql);
// // Cek jumlah data yang ada di database
// if (mysqli_num_rows($results) > 0) {
//     // menampilkan data dari results
//     while ($row = mysqli_fetch_assoc($results)) {
//         echo $row['nama_jabatan'] . '<br>';
//     }

//     // menampilkan data dari results
//     foreach ($results as $item) {
//         echo $item['nama_jabatan'] . '<br>';
//     }
// } else {
//     echo 'Data kosong';
// }