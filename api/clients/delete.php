<?php
    include('../connect.php');
    include('../cors.php');
    include('../protect.php');

    header('Content-Type: application/json; charset=utf-8');

    // 1. Validação do ID
    if (!isset($_POST['id']) || !is_numeric($_POST['id'])) {
        http_response_code(400);
        echo json_encode([
            'message' => 'ID do cliente não informado ou inválido.',
            'status'  => 400,
        ]);
        exit;
    }

    $client_id = (int) $_POST['id'];

    // 2. Verifica se o cliente existe
    $stmt = $mysqli->prepare("SELECT id FROM cad_client WHERE id = ?");
    $stmt->bind_param("i", $client_id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        http_response_code(404);
        echo json_encode([
            'message' => 'Cliente não encontrado.',
            'status'  => 404,
        ]);
        exit;
    }
    $stmt->close();

    // 3. Atualiza o campo active para false
    $update = $mysqli->prepare("UPDATE cad_client SET active = 0 WHERE id = ?");
    $update->bind_param("i", $client_id);

    if ($update->execute()) {
        http_response_code(200);
        echo json_encode([
            'message' => 'Cliente desativado com sucesso.',
            'status'  => 200,
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'message' => 'Erro ao desativar cliente: ' . $update->error,
            'status'  => 500,
        ]);
    }
?>
