<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

// Dados do POST multipart/form-data
$data = $_POST;
$erros = [];

// Verifica se campos obrigatórios foram enviados
if (!isset($data['name']) || trim($data['name']) === '') {
    $erros[] = 'Nome da Empresa/Cliente em branco';
} else {
    $name = trim($data['name']);
}

// Adicionando validação para CNPJ (opcional)
$cnpj = $data['cnpj'] ?? '';
if ($cnpj !== '' && !validarCNPJ($cnpj)) {  // Implemente a função validarCNPJ() se necessário
    $erros[] = 'CNPJ inválido';
}

$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$notes = $data['notes'] ?? '';

// Se houver erros, retorna todos
if (!empty($erros)) {
    echo json_encode([
        'message' => 'Erros de validação',
        'errors' => $erros,
        'status' => 400,
    ]);
    http_response_code(400);
    exit;
}

// Inserção no banco de dados
$sql_code = "INSERT INTO cad_client (name, cnpj, email, phone, notes) 
            VALUES (?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql_code);
$stmt->bind_param("sssss", $name, $cnpj, $email, $phone, $notes);

if ($stmt->execute()) {
    echo json_encode([
        'message' => 'Cliente cadastrado com sucesso!',
        'status' => 200,
    ]);
    http_response_code(200);
} else {
    echo json_encode([
        'message' => 'Erro ao adicionar cliente: ' . $stmt->error,
        'status' => 500,
    ]);
    http_response_code(500);
}

// Função para validar CNPJ (opcional)
function validarCNPJ($cnpj) {
    // Implemente a validação de CNPJ aqui
    // Retorna true se válido, false se inválido
    return true; // Remova esta linha quando implementar
}