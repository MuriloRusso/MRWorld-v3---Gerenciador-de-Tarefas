<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

// Obter o valor do parâmetro de busca
$search = isset($_GET['search']) ? trim($_GET['search']) : '';

// Montar a query base
$sql = "SELECT id, name, ower, email, phone, notes FROM cad_client";

// Se houver filtro de busca, adicionar cláusula WHERE
if (!empty($search)) {
    $searchLike = '%' . $mysqli->real_escape_string($search) . '%';
    $sql .= " WHERE 
                name LIKE '{$searchLike}' OR 
                ower LIKE '{$searchLike}' OR 
                email LIKE '{$searchLike}' OR 
                phone LIKE '{$searchLike}'";
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
    $clientes[] = $row;
}

echo json_encode([
    'data' => $clientes,
    'status' => 200,
]);
http_response_code(200);
