<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

$data = $_POST;
$erros = [];

// Verificar ID da pessoa
$id = $data['id'] ?? null;
if (!$id || !is_numeric($id)) {
    $erros[] = 'ID inválido ou ausente';
}

// Verificar campos obrigatórios
if (!isset($data['name']) || trim($data['name']) === '') {
    $erros[] = 'Nome da pessoa em branco';
} else {
    $name = trim($data['name']);
}

// Campos opcionais
$avatar = $data['avatar'] ?? '';
$phone = $data['phone'] ?? '';
$email = $data['email'] ?? '';
$position = $data['position'] ?? '';
$profession = $data['profession'] ?? '';
$notes = $data['notes'] ?? '';
$is_owner = isset($data['is_owner']) ? (bool)$data['is_owner'] : false;

// Validação de email se fornecido
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erros[] = 'Email inválido';
}

// Verificar se a pessoa existe e obter o id_client atual
$current_id_client = null;
if (!isset($erros['id'])) {
    $check_person = $mysqli->prepare("SELECT id_client FROM cad_person WHERE id = ?");
    $check_person->bind_param("i", $id);
    $check_person->execute();
    $check_person->bind_result($current_id_client);
    $check_person->fetch();
    $check_person->close();
    
    if ($current_id_client === null) {
        $erros[] = 'Pessoa não encontrada';
    }
}

// Verificar erro no upload do avatar
if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] !== UPLOAD_ERR_OK && $_FILES['avatar']['error'] !== UPLOAD_ERR_NO_FILE) {
    $erros[] = 'Erro ao fazer upload do avatar';
}

if (!empty($erros)) {
    echo json_encode([
        'message' => 'Erros de validação',
        'errors' => $erros,
        'status' => 400,
    ]);
    http_response_code(400);
    exit;
}

// Atualiza dados principais (não inclui id_client pois não pode ser alterado)
$sql_code = "UPDATE cad_person SET 
    name = ?, phone = ?, email = ?, position = ?, 
    profession = ?, notes = ?, is_owner = ?
    WHERE id = ?";

$stmt = $mysqli->prepare($sql_code);
$stmt->bind_param("ssssssii", $name, $phone, $email, $position, $profession, $notes, $is_owner, $id);

if ($stmt->execute()) {
    $avatar_filename = '';

    // Processar upload do avatar se fornecido
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = __DIR__ . "/uploads/persons/$id/";
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        // Limpar avatares antigos
        $old_files = glob($uploadDir . "avatar.*");
        foreach ($old_files as $old_file) {
            if (is_file($old_file)) {
                unlink($old_file);
            }
        }

        $ext = pathinfo($_FILES['avatar']['name'], PATHINFO_EXTENSION);
        $avatar_filename = 'avatar.' . strtolower($ext);
        $destination = $uploadDir . $avatar_filename;

        if (move_uploaded_file($_FILES['avatar']['tmp_name'], $destination)) {
            $updateAvatar = $mysqli->prepare("UPDATE cad_person SET avatar = ? WHERE id = ?");
            $updateAvatar->bind_param("si", $avatar_filename, $id);
            $updateAvatar->execute();
            $updateAvatar->close();
        } else {
            echo json_encode([
                'message' => 'Pessoa atualizada, mas falha ao mover o avatar.',
                'status' => 206,
            ]);
            http_response_code(206);
            exit;
        }
    }

    echo json_encode([
        'message' => 'Pessoa atualizada com sucesso!',
        'person_id' => $id,
        'id_client' => $current_id_client, // Retorna o id_client atual para referência
        'status' => 200,
    ]);
    http_response_code(200);
} else {
    echo json_encode([
        'message' => 'Erro ao atualizar pessoa: ' . $stmt->error,
        'status' => 500,
    ]);
    http_response_code(500);
}

$stmt->close();
?>