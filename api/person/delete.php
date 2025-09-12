<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

header('Content-Type: application/json; charset=utf-8');

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['id']) || !is_numeric($input['id'])) {
    http_response_code(400);
    echo json_encode([
        'message' => 'ID da pessoa não informado ou inválido.',
        'status' => 400,
    ]);
    exit;
}

$person_id = (int) $input['id'];

// Verifica se a pessoa existe
$stmt = $mysqli->prepare("SELECT id, name FROM cad_person WHERE id = ?");
$stmt->bind_param("i", $person_id);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    http_response_code(404);
    echo json_encode([
        'message' => 'Pessoa não encontrada.',
        'status' => 404,
    ]);
    exit;
}
$stmt->close();

// Verifica dependências em outras tabelas (se houver)
// Como a tabela cad_person geralmente é uma tabela terminal (não tem outras tabelas dependendo dela),
// podemos pular esta verificação, mas deixei comentado caso precise no futuro
/*
$dependencias = [];

$checkTables = [
    'outra_tabela' => 'Descrição da dependência',
    // Adicione aqui tabelas que referenciam a pessoa
];

foreach ($checkTables as $table => $label) {
    $query = $mysqli->prepare("SELECT COUNT(*) FROM $table WHERE person_id = ?");
    $query->bind_param("i", $person_id);
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
        'message' => 'Não é possível excluir a pessoa porque existem registros vinculados: ' . implode(', ', $dependencias) . '.',
        'status' => 409,
    ]);
    exit;
}
*/

// Excluir pessoa
$delete = $mysqli->prepare("DELETE FROM cad_person WHERE id = ?");
$delete->bind_param("i", $person_id);

if ($delete->execute()) {
    // Opcional: Excluir diretório de uploads da pessoa
    $uploadDir = __DIR__ . "/uploads/persons/$person_id/";
    if (is_dir($uploadDir)) {
        // Remove todos os arquivos do diretório
        $files = glob($uploadDir . '*');
        foreach ($files as $file) {
            if (is_file($file)) {
                unlink($file);
            }
        }
        // Remove o diretório
        rmdir($uploadDir);
    }
    
    http_response_code(200);
    echo json_encode([
        'message' => 'Pessoa excluída com sucesso.',
        'status' => 200,
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'message' => 'Erro ao excluir pessoa: ' . $delete->error,
        'status' => 500,
    ]);
}

$delete->close();
?>