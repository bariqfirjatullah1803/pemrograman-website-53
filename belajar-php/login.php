<?php
require_once 'layouts/header.php';
require_once ("configs/database.php");
// http://localhost/belajar-php/login.php?email=admin%40localhost.com&password=adminadmin
// var_dump($_GET);

// if (isset($_GET['email'])) {
//     echo $_GET['email'];
//     echo $_GET['password'];
// }


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input = $_POST;
    $email = $input['email'];
    $password = md5($input['password']);
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    
    $results = mysqli_query($conn, $sql);
    $user = mysqli_fetch_assoc($results);
    
    if ($user) {
        echo 'berhasil login';
    } else {
        echo 'email / password salah';
    }
}

?>
<main class="container">
    <form action="" method="POST">
        <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" id="email">
        </div>
        <div class="mb-3">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
    </form>
</main>
<?php
require_once 'layouts/footer.php';
?>