<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

header('Content-Type: application/json; charset=utf-8');

// Lê o corpo JSON da requisição
$input = json_decode(file_get_contents('php://input'), true);

// Valida se o ID foi enviado corretamente
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

// Atualiza o campo 'active' para 0 (false)
$update = $mysqli->prepare("UPDATE cad_client SET active = 0 WHERE id = ?");
$update->bind_param("i", $client_id);

if ($update->execute()) {
    http_response_code(200);
    echo json_encode([
        'message' => 'Cliente excluído com sucesso.',
        'status' => 200,
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'message' => 'Erro ao excluir cliente: ' . $update->error,
        'status' => 500,
    ]);
}
?>
