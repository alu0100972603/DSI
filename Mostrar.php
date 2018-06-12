<?php
    $conn = new mysqli("sql305.epizy.com",  "epiz_21950536", "ProyectoUYA18", "epiz_21950536_FastFood");
    $result = $conn->query("select * from Chat order by id desc");
    $outp = array();
    $outp = $result->fetch_all(MYSQLI_ASSOC);
    $jsonencoded = json_encode($outp);
    echo $jsonencoded;
?> 