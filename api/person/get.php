<?php
include('../connect.php');
include('../cors.php');
include('../protect.php');

// Verificar se o parâmetro id_client foi passado
if (!isset($_GET['id_client']) || !is_numeric($_GET['id_client'])) {
    echo json_encode([
        'message' => 'Parâmetro id_client é obrigatório e deve ser numérico',
        'status' => 400,
    ]);
    http_response_code(400);
    exit;
}

$id_client = (int)$_GET['id_client'];
$search = isset($_GET['search']) ? trim($_GET['search']) : '';

// Verificar se o cliente existe
$check_client = $mysqli->prepare("SELECT id, name FROM cad_client WHERE id = ? AND active = 1");
$check_client->bind_param("i", $id_client);
$check_client->execute();
$check_client->store_result();

if ($check_client->num_rows === 0) {
    echo json_encode([
        'message' => 'Cliente não encontrado ou inativo',
        'status' => 404,
    ]);
    http_response_code(404);
    exit;
}
$check_client->close();

// Montar a query base
$sql = "SELECT 
            p.*,
            c.name as client_name,
            c.logo as client_logo
        FROM cad_person p
        INNER JOIN cad_client c ON p.id_client = c.id
        WHERE p.id_client = ?";

// Se houver filtro de busca, adicionar cláusulas adicionais
if (!empty($search)) {
    $searchLike = '%' . $mysqli->real_escape_string($search) . '%';
    $sql .= " AND (
                p.name LIKE '{$searchLike}' OR 
                p.email LIKE '{$searchLike}' OR 
                p.phone LIKE '{$searchLike}' OR 
                p.position LIKE '{$searchLike}' OR
                p.profession LIKE '{$searchLike}' OR
                p.notes LIKE '{$searchLike}'
            )";
}

$sql .= " ORDER BY p.is_owner DESC, p.name ASC";

// Preparar e executar a query
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("i", $id_client);
$stmt->execute();
$result = $stmt->get_result();

if (!$result) {
    echo json_encode([
        'message' => 'Erro ao buscar registros: ' . $mysqli->error,
        'status' => 500,
    ]);
    http_response_code(500);
    exit;
}

$pessoas = [];

while ($row = $result->fetch_assoc()) {
    // Formatando dados para exibição
    if (!empty($row['phone'])) {
        $row['phone_formatado'] = formatarTelefone($row['phone']);
    }
    
    // Adicionar informações do cliente (já estamos fazendo JOIN, mas para consistência)
    $row['client_info'] = [
        'id' => $id_client,
        'name' => $row['client_name'],
        'logo' => $row['client_logo']
    ];
    
    // Remover campos auxiliares do JOIN
    unset($row['client_name'], $row['client_logo']);
    
    // Verificar se há avatar e montar URL completa se existir
    if (!empty($row['avatar'])) {
        $row['avatar_url'] = getBaseUrl() . "/uploads/persons/{$row['id']}/{$row['avatar']}";
    } else {
        $row['avatar_url'] = null;
    }
    
    // Converter is_owner para boolean para melhor resposta JSON
    $row['is_owner'] = (bool)$row['is_owner'];
    
    $pessoas[] = $row;
}

echo json_encode([
    'data' => $pessoas,
    'total' => count($pessoas),
    'client_id' => $id_client,
    'status' => 200,
]);
http_response_code(200);

// Funções auxiliares
function formatarTelefone($telefone) {
    $telefone = preg_replace('/[^0-9]/', '', $telefone);
    
    if (strlen($telefone) === 11) {
        return '(' . substr($telefone, 0, 2) . ') ' . 
               substr($telefone, 2, 5) . '-' . 
               substr($telefone, 7, 4);
    } elseif (strlen($telefone) === 10) {
        return '(' . substr($telefone, 0, 2) . ') ' . 
               substr($telefone, 2, 4) . '-' . 
               substr($telefone, 6, 4);
    }
    
    return $telefone;
}

function getBaseUrl() {
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'];
    return $protocol . '://' . $host;
}