INDEX.HTML
---------------------------------
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Atualizar DIV de segundos em segundos com PHP/JQuery/AJAX</title>
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
            <script type="text/javascript">
                // Função responsável por atualizar as frases
                function atualizar()
                {
                    // Fazendo requisição AJAX
                    $.post('atualizar.php', function (frase) {
                        // Exibindo frase
                        $('#frase').html('<i>' + frase.Id + '</i><br />' + '<p>Autor: ' + frase.Mensagem + '</p>' + '<br />' + frase.Data + '<br />' + frase.Hora);
                    }, 'JSON');
                }
                // Definindo intervalo que a função será chamada
                setInterval("atualizar()", 1000);
                // Quando carregar a página
                $(function() {
                    // Faz a primeira atualização
                    atualizar();
                });
            </script>
</head>
<body>
<div class="container">
    <h1>Frases sorteadas</h1>
    <div id="frase"></div>
</div>
</body>
</html>
********************************************
atualizar.php
---------------------------------------
<?php
// Informações para conexão
$host = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'alber258_dbsms';
$dsn = "mysql:host={$host};port=3306;dbname={$banco};charset=utf8";
try
{
    // Conectando
    $pdo = new PDO($dsn, $usuario, $senha);
}
catch (PDOException $e)
{
    // Se ocorrer algum erro na conexão
    die($e->getMessage());
}
// Incluindo arquivo de conexão
//require_once('../config/conn.php');
// Selecionando uma frase aleatória
$stmt = $pdo->prepare('SELECT * FROM tblmensagens ORDER BY RAND() LIMIT 1');
// Se selecionado com sucesso
if ($stmt->execute())
{
    // Armazenando frase
    $frase = $stmt->fetchObject();
    // Retornando frase em formato JSON
    echo json_encode($frase);
}