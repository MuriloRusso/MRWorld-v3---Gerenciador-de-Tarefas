<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=mrworld", "root", "root");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    ");


    // Tabela cad_client (precisa ser criada antes da cad_person)
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_client (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name TEXT NOT NULL,
            ower TEXT NOT NULL,
            email TEXT,
            phone TEXT,
            notes TEXT,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    ");

    // Tabela cad_person
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_person (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name TEXT,
            id_client INT,
            avatar VARCHAR(255) DEFAULT NULL,
            phone VARCHAR(255) DEFAULT NULL,
            email VARCHAR(255) DEFAULT NULL,
            position VARCHAR(255) DEFAULT NULL,
            profession VARCHAR(255) DEFAULT NULL,
            notes TEXT DEFAULT NULL,
            is_owner BOOLEAN DEFAULT false,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_client) REFERENCES cad_client(id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    ");

    echo "Tabelas criadas com sucesso!";
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
