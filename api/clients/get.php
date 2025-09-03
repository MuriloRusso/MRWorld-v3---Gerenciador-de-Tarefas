<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

// Obter o valor do parâmetro de busca
$search = isset($_GET['search']) ? trim($_GET['search']) : '';

// Montar a query base com LEFT JOIN para buscar os dados do cliente referenciado
$sql = "SELECT 
            c.*, 
            cli.name as client_by_name,
            cli.email as client_by_email,
            cli.phone as client_by_phone,
            cli.cnpj as client_by_cnpj
        FROM cad_client c
        LEFT JOIN cad_client cli ON c.id_client = cli.id
        WHERE c.active = 1";

// Se houver filtro de busca, adicionar cláusulas adicionais
if (!empty($search)) {
    $searchLike = '%' . $mysqli->real_escape_string($search) . '%';
    $sql .= " AND (
                c.name LIKE '{$searchLike}' OR 
                c.email LIKE '{$searchLike}' OR 
                c.phone LIKE '{$searchLike}' OR 
                c.cnpj LIKE '{$searchLike}' OR
                c.cep LIKE '{$searchLike}' OR
                c.address LIKE '{$searchLike}' OR
                c.city LIKE '{$searchLike}' OR
                c.state LIKE '{$searchLike}' OR
                c.country LIKE '{$searchLike}' OR
                cli.name LIKE '{$searchLike}'  -- Também buscar pelo nome do cliente referenciado
            )";
}

$sql .= " ORDER BY c.name ASC";

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

    // Montar o objeto client_by se houver referência
    $row['client_by'] = null;
    if (!empty($row['id_client'])) {
        $row['client_by'] = [
            'id' => $row['id_client'],
            'name' => $row['client_by_name'],
            'email' => $row['client_by_email'],
            'phone' => $row['client_by_phone'],
            'cnpj' => $row['client_by_cnpj'],
            'cnpj_formatado' => !empty($row['client_by_cnpj']) ? formatarCNPJ($row['client_by_cnpj']) : null
        ];
    }

    // Remover campos auxiliares do JOIN para não poluir o response
    unset(
        $row['client_by_name'],
        $row['client_by_email'],
        $row['client_by_phone'],
        $row['client_by_cnpj']
    );

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
    if (strlen($cnpj) === 14) {
        return substr($cnpj, 0, 2) . '.' . 
               substr($cnpj, 2, 3) . '.' . 
               substr($cnpj, 5, 3) . '/' . 
               substr($cnpj, 8, 4) . '-' . 
               substr($cnpj, 12, 2);
    }
    return $cnpj;
}

function formatarCEP($cep) {
    $cep = preg_replace('/[^0-9]/', '', $cep);
    if (strlen($cep) === 8) {
        return substr($cep, 0, 5) . '-' . substr($cep, 5, 3);
    }
    return $cep;
}

function formatarEndereco($dados) {
    $endereco = [];

    if (!empty($dados['address'])) {
        $endereco[] = $dados['address'];
        if (!empty($dados['addressNumber'])) {
            $endereco[] = $dados['addressNumber'];
        }
    }
    if (!empty($dados['neighborhood'])) {
        $endereco[] = $dados['neighborhood'];
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