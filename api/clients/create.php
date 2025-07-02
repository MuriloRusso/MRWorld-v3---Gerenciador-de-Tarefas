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


    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $notes = $data['notes'] ?? '';

    // (Opcional) Upload de imagem ou outro arquivo
    /*$uploadedFilePath = '';
    if (isset($_FILES['file']) && $_FILES['file']['error'] !== UPLOAD_ERR_NO_FILE) {
        if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $photo = $_FILES['file'];
            $folder = "../../../public/src/img/upload/post/";
            $extension = strtolower(pathinfo($photo['name'], PATHINFO_EXTENSION));
            $newFileName = uniqid() . "." . $extension;
            $path = $folder . $newFileName;

            if (move_uploaded_file($photo["tmp_name"], $path)) {
                $uploadedFilePath = $newFileName;
            } else {
                $erros[] = 'Erro ao fazer upload do arquivo';
            }
        } else {
            $erros[] = 'Erro no envio do arquivo';
        }
    }*/

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
    $sql_code = "INSERT INTO cad_client (name, email, phone, notes) 
                VALUES (?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($sql_code);
    $stmt->bind_param("sssss", $name, $email, $phone, $notes);

    if ($stmt->execute()) {
        echo json_encode([
            'message' => 'onada com sucesso!',
            'status' => 200,
        ]);
        http_response_code(200);
    } else {
        echo json_encode([
            'message' => 'Erro ao adicionar empresa: ' . $stmt->error,
            'status' => 500,
        ]);
        http_response_code(500);
    }
