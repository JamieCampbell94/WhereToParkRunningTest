<?php
//  require_once('database/connection.php');


/** mysql hostname **/
$hostname = 'localhost';

/** mysql username **/
$username = 'root';

/** mysql password **/
$password = 'root';

try {
  $pdo = new PDO('mysql:host=localhost;dbname=Chat', $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


      $stmt = $pdo->prepare('SELECT time, message FROM chatLogTwo');
      $stmt->execute();


      while($row = $stmt->fetchObject()) {
        print date('H:i:s', strtotime($row->time)). ' - '. $row->message .'<br />' ;
      }



  /*** close the database connection ***/
       $dbh = null;
       }

     catch(PDOException $e)
    {
      echo $e->getMessage();
    }

 ?>
