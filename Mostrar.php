<?php
    $conn = new mysqli("localhost", "root", "Lunita55", "Chat"); 
    $result = $conn->query("select * from Chat");
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    $jsonencoded = json_encode($outp);
    echo $jsonencoded;
?>   