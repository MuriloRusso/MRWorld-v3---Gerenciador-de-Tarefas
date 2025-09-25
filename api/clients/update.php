<?php
    include('../connect.php');
    include('../cors.php');
    include('../protect.php');

    $data = $_POST;
    $erros = [];

    $id = $data['id'] ?? null;
    if (!$id || !is_numeric($id)) {
        $erros[] = 'ID inválido ou ausente';
    }

    if (!isset($data['name']) || trim($data['name']) === '') {
        $erros[] = 'Nome da Empresa/Cliente em branco';
    } else {
        $name = trim($data['name']);
    }

    $cnpj = $data['cnpj'] ?? '';
    if ($cnpj !== '' && !validarCNPJ($cnpj)) {
        $erros[] = 'CNPJ inválido';
    }


    $idClient = $data['id_client'] ?? null;

    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $notes = $data['notes'] ?? '';
    $cep = $data['cep'] ?? '';
    $address = $data['address'] ?? '';
    $addressNumber = $data['addressNumber'] ?? '';
    $neighborhood = $data['neighborhood'] ?? '';
    $city = $data['city'] ?? '';
    $state = $data['state'] ?? '';
    $country = $data['country'] ?? '';

    if ($cep !== '' && !validarCEP($cep)) {
        $erros[] = 'CEP inválido';
    }

    if (isset($_FILES['logo']) && $_FILES['logo']['error'] !== UPLOAD_ERR_OK && $_FILES['logo']['error'] !== UPLOAD_ERR_NO_FILE) {
        $erros[] = 'Erro ao fazer upload da logo';
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

    // Atualiza dados principais
    $sql_code = "UPDATE cad_client SET 
        name = ?, cnpj = ?, id_client = ?, email = ?, phone = ?, notes = ?, 
        cep = ?, address = ?, addressNumber = ?, neighborhood = ?, 
        city = ?, state = ?, country = ?
        WHERE id = ?";

    $stmt = $mysqli->prepare($sql_code);
    $stmt->bind_param("sssssssssssssi", $name, $cnpj, $idClient, $email, $phone, $notes, $cep, $address, $addressNumber, $neighborhood, $city, $state, $country, $id);

    if ($stmt->execute()) {
        $logo_filename = '';

        if (isset($_FILES['logo']) && $_FILES['logo']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = __DIR__ . "/uploads/$id/";
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }

            $ext = pathinfo($_FILES['logo']['name'], PATHINFO_EXTENSION);
            $logo_filename = 'logo.' . strtolower($ext);
            $destination = $uploadDir . $logo_filename;

            if (move_uploaded_file($_FILES['logo']['tmp_name'], $destination)) {
                $updateLogo = $mysqli->prepare("UPDATE cad_client SET logo = ? WHERE id = ?");
                $updateLogo->bind_param("si", $logo_filename, $id);
                $updateLogo->execute();
            } else {
                echo json_encode([
                    'message' => 'Cliente atualizado, mas falha ao mover o logo.',
                    'status' => 206,
                ]);
                http_response_code(206);
                exit;
            }
        }

        echo json_encode([
            'message' => 'Cliente atualizado com sucesso!',
            'status' => 200,
        ]);
        http_response_code(200);
    } else {
        echo json_encode([
            'message' => 'Erro ao atualizar cliente: ' . $stmt->error,
            'status' => 500,
        ]);
        http_response_code(500);
    }

    // Validações auxiliares
    function validarCNPJ($cnpj) {
        $cnpj = preg_replace('/[^0-9]/', '', $cnpj);
        return strlen($cnpj) === 14;
    }

    function validarCEP($cep) {
        $cep = preg_replace('/[^0-9]/', '', $cep);
        return strlen($cep) === 8;
    }
