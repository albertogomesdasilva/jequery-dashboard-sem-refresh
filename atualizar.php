<?php
// Informações para conexão
// $host = 'localhost';
// $usuario = 'root';
// $senha = '';
// $banco = 'dbsms';
// $dsn = "mysql:host={$host};port=3306;dbname={$banco};charset=utf8";
// try {
//     $conn = new PDO("mysql:host=$host;dbname=$banco", $usuario, $senha);
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//   } catch(PDOException $e) {
//     echo 'Erro de conexão: ' . $e->getMessage();
//   }
// Incluindo arquivo de conexão
require_once('./conn.php');
// Selecionando uma frase aleatória
$stmt = $conn->prepare('SELECT * FROM tblmensagens');

$sql = $conn->prepare('SELECT * FROM tblmensagens');

// Se selecionado com sucesso
if ($stmt->execute())
{
    // Armazenando frase
   // $frase = $stmt->fetchObject();

     $frase = $stmt->fetchAll();
   
   /****************************************** */
   
    // Retornando frase em formato JSON
     
   
     echo json_encode($frase);
    



/****************************************************** */


    
    // // // Exibindo os resultados
    // while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    //   echo 'ID: ' . $row['Id'] . '<br>';
    //   echo 'STATUS: ' . $row['Status'] . '<br>';
    //   echo 'MENSAGEM: ' . $row['Mensagem'] . '<br><br>';
    //   echo 'PESO: ' . $row['Peso'] . '<br><br>';
    //   echo 'DATA: ' . $row['Data'] . '<br><br>';
    // }
    
    

    
}