<?php

// Informações para conexão
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'dbsms';
$dsn = "mysql:host={$host};port=3306;dbname={$banco};charset=utf8";
try {
    $conn = new PDO("mysql:host=$host;dbname=$banco", $usuario, $senha);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo 'Erro de conexão: ' . $e->getMessage();
  }

  ?>