<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

// Obter o valor do parâmetro de busca
$search = isset($_GET['search']) ? trim($_GET['search']) : '';

// Montar a query base
$sql = "SELECT * FROM cad_client";

// Se houver filtro de busca, adicionar cláusula WHERE
if (!empty($search)) {
    $searchLike = '%' . $mysqli->real_escape_string($search) . '%';
    $sql .= " WHERE 
                name LIKE '{$searchLike}' OR 
                owner LIKE '{$searchLike}' OR 
                email LIKE '{$searchLike}' OR 
                phone LIKE '{$searchLike}' OR 
                cnpj LIKE '{$searchLike}' OR
                cep LIKE '{$searchLike}' OR
                address LIKE '{$searchLike}' OR
                city LIKE '{$searchLike}' OR
                state LIKE '{$searchLike}' OR
                country LIKE '{$searchLike}'";
}

$sql .= " ORDER BY name ASC";

$result = $mysqli->query($sql);

if (!$result) {
    echo json_encode([
        'message' => 'Erro ao buscar registros: ' . $mysqli->error,
        'status' => 500,
    ]);
    http_response_code(500);
    exit;
}

$clientes = [];

while ($row = $result->fetch_assoc()) {
    // Formatando o CNPJ para exibição (opcional)
    if (!empty($row['cnpj'])) {
        $row['cnpj_formatado'] = formatarCNPJ($row['cnpj']);
    }
    
    // Formatando o CEP para exibição (opcional)
    if (!empty($row['cep'])) {
        $row['cep_formatado'] = formatarCEP($row['cep']);
    }
    
    // Criando um campo de endereço completo (opcional)
    $row['endereco_completo'] = formatarEndereco($row);
    
    $clientes[] = $row;
}

echo json_encode([
    'data' => $clientes,
    'status' => 200,
]);
http_response_code(200);

// Função para formatar CNPJ (opcional)
function formatarCNPJ($cnpj) {
    // Remove caracteres não numéricos
    $cnpj = preg_replace('/[^0-9]/', '', $cnpj);
    
    // Formata: XX.XXX.XXX/XXXX-XX
    return substr($cnpj, 0, 2) . '.' . 
           substr($cnpj, 2, 3) . '.' . 
           substr($cnpj, 5, 3) . '/' . 
           substr($cnpj, 8, 4) . '-' . 
           substr($cnpj, 12, 2);
}

// Função para formatar CEP (opcional)
function formatarCEP($cep) {
    // Remove caracteres não numéricos
    $cep = preg_replace('/[^0-9]/', '', $cep);
    
    // Formata: XXXXX-XXX
    return substr($cep, 0, 5) . '-' . substr($cep, 5, 3);
}

// Função para formatar endereço completo (opcional)
function formatarEndereco($dados) {
    $endereco = [];
    
    if (!empty($dados['address'])) {
        $endereco[] = $dados['address'];
    }
    if (!empty($dados['city'])) {
        $endereco[] = $dados['city'];
    }
    if (!empty($dados['state'])) {
        $endereco[] = $dados['state'];
    }
    if (!empty($dados['cep'])) {
        $endereco[] = 'CEP: ' . formatarCEP($dados['cep']);
    }
    if (!empty($dados['country'])) {
        $endereco[] = $dados['country'];
    }
    
    return implode(', ', $endereco);
}