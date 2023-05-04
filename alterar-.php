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

<?php
require_once('./conn.php');






// /********************************************** */
// $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);

//         $resultado = "SELECT * FROM jumbos WHERE id='$id'LIMIT 1";
//          $resultado_jumbos = mysqli_query($conn, $resultado);


//   while($row_usuarios = mysqli_fetch_assoc($resultado_jumbos)){         
          
// 		      $situacao = $row_usuarios["situacao_id"];
//           if($situacao > 0) {
// 			        $situacao++;
//           }
//    }

//         $result_paginas = "UPDATE jumbos SET situacao_id = $situacao, modified=NOW() WHERE id = $id";
//         $resultado_paginas = mysqli_query($conn, $result_paginas);


// echo "<META HTTP-EQUIV=REFRESH CONTENT = '0;URL=http://localhost/estoque/adm/'>";
// echo "<META HTTP-EQUIV=REFRESH CONTENT = '0;URL=http://$url_host/estoque/adm/'>";
//         echo "<META HTTP-EQUIV=REFRESH CONTENT = '0;URL=http://albertogomesdasilva.com.br/estoque/adm/'>";
// /************************************** */


$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);


echo "o id é : " . $id;

// Selecionando uma frase aleatória
$stmt = $conn->prepare("SELECT * FROM tblmensagens WHERE id='$id' LIMIT 1");


// Se selecionado com sucesso
if ($stmt->execute())

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    ?>        
    <div class="container">
            
        <?php
        $sit = $row["Status"];
            echo 'ID: ' . $row['Id'] . '<br>';
            echo 'STATUS: ' . $sit . '<br>';
            echo 'MENSAGEM: ' . $row['Mensagem'] . '<br><br>';
            echo 'PESO: ' . $row['Peso'] . '<br><br>';
            echo 'DATA: ' . $row['Data'] . '<br><br>';

        }

        $situacao = (int)$sit;

        // var_dump($sit);
        // var_dump($situacao);

                   if($situacao > 0) {
         			        $situacao--;
                   }
                   else {
                    echo "não pode mudar";
                   }
                   
                  
                  
                   $stmt = $conn->prepare("UPDATE tblmensagens SET Status = :situacao WHERE id = $id");
                   $stmt->bindParam(':situacao', $situacao);
                   $stmt->execute();
                   
                    echo "<META HTTP-EQUIV=REFRESH CONTENT = '0;URL=http://localhost/jquery/'>";

            // Fecha a conexão com o banco de dados
            $pdo = null;
            ?>
</div>
    </body>
    </html>