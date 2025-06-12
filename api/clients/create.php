<?php
    include('../connect.php');
    include('../cors.php');
    include('../protect.php');

    // Os dados vêm via multipart/form-data, então usamos $_POST e $_FILES
    $data = $_POST;

    if (!isset($data['name']) || !isset($data['ower'])) {
        echo json_encode([
            'message' => 'Campos obrigatórios não enviados',
            'status' => 400,
        ]);
        http_response_code(400);
        exit;
    }

    $name = trim($data['name']);
    $ower = trim($data['ower']);

    if (strlen($name) === 0) {
        echo json_encode([
            'message' => 'Nome da Empresa/Cliente em branco',
            'status' => 401,
        ]);
        http_response_code(401);
        exit;
    }

    if (strlen($ower) === 0) {
        echo json_encode([
            'message' => 'Responsável da Empresa/Cliente em branco',
            'status' => 401,
        ]);
        http_response_code(401);
        exit;
    }

    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $notes = $data['notes'] ?? '';

    // (Opcional) Upload de imagem ou outro arquivo
    /*$uploadedFilePath = '';
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $photo = $_FILES['file'];
        $folder = "../../../public/src/img/upload/post/";
        $extension = strtolower(pathinfo($photo['name'], PATHINFO_EXTENSION));
        $newFileName = uniqid() . "." . $extension;
        $path = $folder . $newFileName;

        if (move_uploaded_file($photo["tmp_name"], $path)) {
            $uploadedFilePath = $newFileName; // salva o nome do arquivo, se precisar
        } else {
            echo json_encode([
                'message' => 'Erro ao fazer upload do arquivo',
                'status' => 500,
            ]);
            http_response_code(500);
            exit;
        }
    }*/

    // Inserção no banco de dados
    $sql_code = "INSERT INTO cad_client (name, ower, email, phone, notes) 
                VALUES (?, ?, ?, ?, ?)";
    $stmt = $mysqli->prepare($sql_code);
    $stmt->bind_param("sssss", $name, $ower, $email, $phone, $notes);

    if ($stmt->execute()) {
        echo json_encode([
            'message' => 'Empresa adicionada com sucesso!',
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
