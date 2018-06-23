<meta charset="UTF8">
<?php
    session_start();
	session_destroy();
    echo "<script>
              window.location.href='index.html';
          </script>";

?>