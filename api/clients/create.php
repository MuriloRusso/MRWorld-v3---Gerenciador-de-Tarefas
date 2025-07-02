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
if ($cnpj !== '' && !validarCNPJ($cnpj)) {
    $erros[] = 'CNPJ inválido';
}

// Campos básicos
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$notes = $data['notes'] ?? '';

// Campos de endereço
$cep = $data['cep'] ?? '';
$address = $data['address'] ?? '';
$city = $data['city'] ?? '';
$state = $data['state'] ?? '';
$country = $data['country'] ?? '';

// Validação opcional para CEP
if ($cep !== '' && !validarCEP($cep)) {
    $erros[] = 'CEP inválido';
}

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
$sql_code = "INSERT INTO cad_client (name, cnpj, email, phone, notes, cep, address, city, state, country) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql_code);
$stmt->bind_param("ssssssssss", $name, $cnpj, $email, $phone, $notes, $cep, $address, $city, $state, $country);

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
    // Remove caracteres não numéricos
    $cnpj = preg_replace('/[^0-9]/', '', $cnpj);
    
    // Verifica se tem 14 dígitos
    if (strlen($cnpj) != 14) {
        return false;
    }
    
    // Validação dos dígitos verificadores (algoritmo de validação de CNPJ)
    // [...] (implemente a validação completa aqui)
    
    return true;
}

// Função para validar CEP (opcional)
function validarCEP($cep) {
    // Remove caracteres não numéricos
    $cep = preg_replace('/[^0-9]/', '', $cep);
    
    // Verifica se tem 8 dígitos
    return strlen($cep) === 8;
}