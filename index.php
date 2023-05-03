<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Atualizar DIV de segundos em segundos com PHP/JQuery/AJAX</title>
    <!-- <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script> -->
    <script src="./jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="./bootstrap.min.css">
    <link rel="stylesheet" href="./item.css">
            <script type="text/javascript" src="./script.js"></script>


               
</head>
<body>
        <div class="container">

                <h1>LISTA - STATUS</h1>
        </div>
        <div class="container">
                <div id="container">
                        
                        </div>


<div>

        <div id="container1">
               
        </div>
</div>
<div>
        <div id="container2"></div>
</div>
<div>
        <div id="container3"></div>
</div>
<div>
        <div id="container4"></div>
</div>

        </div>
<?php
require_once('./Atualizar.php');



while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        ?>        
        <div class="container">
                
                <?php
                echo 'ID: ' . $row['Id'] . '<br>';
                echo 'STATUS: ' . $row['Status'] . '<br>';
                echo 'MENSAGEM: ' . $row['Mensagem'] . '<br><br>';
                echo 'PESO: ' . $row['Peso'] . '<br><br>';
                echo 'DATA: ' . $row['Data'] . '<br><br>';
        }
                ?>
                </div>

?>        

</div>
</body>
</html>
