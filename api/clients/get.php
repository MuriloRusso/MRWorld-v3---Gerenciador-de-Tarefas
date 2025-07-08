<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

// Obter o valor do parâmetro de busca
$search = isset($_GET['search']) ? trim($_GET['search']) : '';

// Montar a query base
$sql = "SELECT * FROM cad_client WHERE active = 1";

// Se houver filtro de busca, adicionar cláusulas adicionais
if (!empty($search)) {
    $searchLike = '%' . $mysqli->real_escape_string($search) . '%';
    $sql .= " AND (
                name LIKE '{$searchLike}' OR 
                owner LIKE '{$searchLike}' OR 
                email LIKE '{$searchLike}' OR 
                phone LIKE '{$searchLike}' OR 
                cnpj LIKE '{$searchLike}' OR
                cep LIKE '{$searchLike}' OR
                address LIKE '{$searchLike}' OR
                city LIKE '{$searchLike}' OR
                state LIKE '{$searchLike}' OR
                country LIKE '{$searchLike}'
            )";
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

// Funções auxiliares
function formatarCNPJ($cnpj) {
    $cnpj = preg_replace('/[^0-9]/', '', $cnpj);
    return substr($cnpj, 0, 2) . '.' . 
           substr($cnpj, 2, 3) . '.' . 
           substr($cnpj, 5, 3) . '/' . 
           substr($cnpj, 8, 4) . '-' . 
           substr($cnpj, 12, 2);
}

function formatarCEP($cep) {
    $cep = preg_replace('/[^0-9]/', '', $cep);
    return substr($cep, 0, 5) . '-' . substr($cep, 5, 3);
}

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
