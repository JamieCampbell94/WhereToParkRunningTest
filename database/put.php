<?php
//require_once('../database/connection.php');

/** mysql hostname **/
$hostname = 'localhost';

/** mysql username **/
$username = 'root';

/** mysql password **/
$password = 'root';

$data = file_get_contents('php://input'); // Get any data sent to this file - special constant
$json = json_decode($data, true); // Convert JSON to PHP array

//This bit is saying only grab the $json from the randomText json pair so instead
//of putting both pairs in its only executes the bit the user types
$hello = $json['randomText'];

try {
  $pdo = new PDO('mysql:host=localhost;dbname=ParkingTest', $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



$stmt = $pdo->prepare('INSERT INTO parkingData (parkingData) VALUES(:name)');
$stmt->execute(array(':name' => $hello));

  # Affected Rows?
  echo $stmt->rowCount(); // 1


  /*** close the database connection ***/
       $dbh = null;
       }

     catch(PDOException $e)
    {
      echo $e->getMessage();
    }

  ?>
