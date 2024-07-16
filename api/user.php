<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include './config.php';

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod == 'GET') {
    getUser($pdo);
} elseif ($requestMethod == 'POST') {
    updateUser($pdo);
}

function getUser($pdo) {
    $userId = 0; // ID do usuário que você deseja obter, pode ser dinâmico
    $stmt = $pdo->prepare("SELECT email FROM users WHERE id = ?");
    $stmt->execute([$userId]);
    $user = $stmt->fetch();
    echo json_encode($user);
}

function updateUser($pdo) {
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'];
    $password = !empty($input['password']) ? password_hash($input['password'], PASSWORD_DEFAULT) : null;
    $userId = 0; // ID do usuário que você deseja atualizar, pode ser dinâmico

    if ($password) {
        $stmt = $pdo->prepare("UPDATE users SET email = ?, password = ? WHERE id = ?");
        $stmt->execute([$email, $password, $userId]);
    } else {
        $stmt = $pdo->prepare("UPDATE users SET email = ? WHERE id = ?");
        $stmt->execute([$email, $userId]);
    }
    echo json_encode(['message' => 'User updated successfully']);
}
?>
