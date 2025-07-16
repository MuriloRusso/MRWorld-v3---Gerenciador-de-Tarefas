<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

header('Content-Type: application/json; charset=utf-8');

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['id']) || !is_numeric($input['id'])) {
    http_response_code(400);
    echo json_encode([
        'message' => 'ID do cliente não informado ou inválido.',
        'status' => 400,
    ]);
    exit;
}

$client_id = (int) $input['id'];

// Verifica se o cliente existe
$stmt = $mysqli->prepare("SELECT id FROM cad_client WHERE id = ?");
$stmt->bind_param("i", $client_id);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    http_response_code(404);
    echo json_encode([
        'message' => 'Cliente não encontrado.',
        'status' => 404,
    ]);
    exit;
}
$stmt->close();

// Verifica dependências em outras tabelas
$dependencias = [];

$checkTables = [
    'cad_project' => 'Projetos',
    'car_person' => 'Pessoas',
    // Adicione aqui mais tabelas que referenciam o cliente
];

foreach ($checkTables as $table => $label) {
    $query = $mysqli->prepare("SELECT COUNT(*) FROM $table WHERE client_id = ?");
    $query->bind_param("i", $client_id);
    $query->execute();
    $query->bind_result($count);
    $query->fetch();
    $query->close();

    if ($count > 0) {
        $dependencias[] = $label;
    }
}

if (!empty($dependencias)) {
    http_response_code(409); // 409 Conflict
    echo json_encode([
        'message' => 'Não é possível excluir o cliente porque existem registros vinculados: ' . implode(', ', $dependencias) . '.',
        'status' => 409,
    ]);
    exit;
}

// Excluir cliente
$delete = $mysqli->prepare("DELETE FROM cad_client WHERE id = ?");
$delete->bind_param("i", $client_id);

if ($delete->execute()) {
    http_response_code(200);
    echo json_encode([
        'message' => 'Cliente excluído com sucesso.',
        'status' => 200,
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'message' => 'Erro ao excluir cliente: ' . $delete->error,
        'status' => 500,
    ]);
}
?>
