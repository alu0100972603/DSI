<?php
    session_start();
    print json_encode($_SESSION, JSON_FORCE_OBJECT)      
?>