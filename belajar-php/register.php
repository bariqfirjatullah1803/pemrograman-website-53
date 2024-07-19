<?php
require_once ("layouts/header.php");
require_once ("configs/database.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input = $_POST;
    $password = md5($input['password']);
    $sql = 'INSERT INTO users SET name="' . $input['name'] . '",email="' . $input['email'] . '",password="' . $password . '"';
    $insert = mysqli_query($conn, $sql);

    if ($insert) {
        echo 'Data berhasil di inputkan';
    } else {
        echo 'Data gagak di inputkan';
    }
}

?>
<main class="container">
    <form action="" method="POST">
        <div class="mb-3">
            <label for="name">Nama</label>
            <input type="text" class="form-control" name="name" id="name">
        </div>
        <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" id="email">
        </div>
        <div class="mb-3">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">Daftar</button>
        </div>
    </form>
</main>
<?php
require_once ("layouts/footer.php");
?>