<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userType = $_POST['user-type'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Database connection
    $servername = "localhost";
    $username = "root";
    $passwordDb = "";
    $dbname = "hospital_db";

    $conn = new mysqli($servername, $username, $passwordDb, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Query based on user type
    $table = ($userType === 'patient') ? 'patients' : 'doctors';
    $sql = "SELECT * FROM $table WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Redirect to respective dashboard
        if ($userType === 'patient') {
            header("P_login.html");
        } else {
            header("Doctor_login.html");
        }
    } else {
        echo "Invalid credentials. Please try again.";
    }

    $conn->close();
}
?>
