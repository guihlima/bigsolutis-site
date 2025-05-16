<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['inputNome'];
    $email = $_POST['inputEmail'];
    $mensagem = $_POST['txtMensagem'];

    $destinatario = "bigsolutis@gmail.com"; // Seu endereço de e-mail
    $assunto = "Novo contato do site";
    $corpo = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
        // Você pode redirecionar para uma página de agradecimento aqui:
        // header("Location: obrigado.html");
    } else {
        echo "Houve um erro ao enviar a mensagem.";
    }
} else {
    // Se alguém acessar o arquivo diretamente sem ser por POST
    echo "Acesso inválido.";
}
?>