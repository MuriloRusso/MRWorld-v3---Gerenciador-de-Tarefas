<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

$data = $_POST;
$erros = [];

// Verifica campos obrigatórios
if (!isset($data['name']) || trim($data['name']) === '') {
    $erros[] = 'Nome da pessoa em branco';
} else {
    $name = trim($data['name']);
}

if (!isset($data['id_client']) || !is_numeric($data['id_client'])) {
    $erros[] = 'ID do cliente é obrigatório';
} else {
    $id_client = (int)$data['id_client'];
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

// Verifica se o cliente existe
if (!isset($erros['id_client'])) {
    $check_client = $mysqli->prepare("SELECT id FROM cad_client WHERE id = ?");
    $check_client->bind_param("i", $id_client);
    $check_client->execute();
    $check_client->store_result();
    
    if ($check_client->num_rows === 0) {
        $erros[] = 'Cliente não encontrado';
    }
    $check_client->close();
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

// Insere a pessoa no banco de dados
$sql_code = "INSERT INTO cad_person (id_client, name, avatar, phone, email, position, profession, notes, is_owner) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql_code);
$stmt->bind_param("isssssssi", $id_client, $name, $avatar, $phone, $email, $position, $profession, $notes, $is_owner);

if ($stmt->execute()) {
    $person_id = $stmt->insert_id;
    
    // Se houver upload de avatar
    $avatar_filename = '';
    
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = __DIR__ . "/uploads/persons/$person_id/";
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $ext = pathinfo($_FILES['avatar']['name'], PATHINFO_EXTENSION);
        $avatar_filename = 'avatar.' . strtolower($ext); // ex: avatar.png, avatar.jpg
        $destination = $uploadDir . $avatar_filename;

        if (move_uploaded_file($_FILES['avatar']['tmp_name'], $destination)) {
            // Atualiza o campo 'avatar' no banco
            $update = $mysqli->prepare("UPDATE cad_person SET avatar = ? WHERE id = ?");
            $update->bind_param("si", $avatar_filename, $person_id);
            $update->execute();
        } else {
            echo json_encode([
                'message' => 'Pessoa cadastrada, mas falha ao mover o avatar.',
                'person_id' => $person_id,
                'status' => 206,
            ]);
            http_response_code(206);
            exit;
        }
    }

    echo json_encode([
        'message' => 'Pessoa cadastrada com sucesso!',
        'person_id' => $person_id,
        'status' => 200,
    ]);
    http_response_code(200);
} else {
    echo json_encode([
        'message' => 'Erro ao adicionar pessoa: ' . $stmt->error,
        'status' => 500,
    ]);
    http_response_code(500);
}

$stmt->close();
?>