<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=mrworld", "root", "root");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Tabela cad_user
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name TEXT NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    ");

    // Tabela cad_client
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_client (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            name TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES cad_user(id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    ");

    // Tabela cad_person
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_person (
            id INT AUTO_INCREMENT PRIMARY KEY,
            id_client INT,
            name TEXT,
            avatar VARCHAR(255),
            phone VARCHAR(255),
            email VARCHAR(255),
            position VARCHAR(255),
            profession VARCHAR(255),
            notes TEXT,
            is_owner BOOLEAN DEFAULT FALSE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_client) REFERENCES cad_client(id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    ");

    // Tabela cad_contact_method
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_contact_method (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255),
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    ");

    // Tabelas de status
    $pdo->exec("CREATE TABLE IF NOT EXISTS lst_status_project (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255)) ENGINE=InnoDB");
    $pdo->exec("CREATE TABLE IF NOT EXISTS lst_status_module (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255)) ENGINE=InnoDB");
    $pdo->exec("CREATE TABLE IF NOT EXISTS lst_status_bug (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255)) ENGINE=InnoDB");
    $pdo->exec("CREATE TABLE IF NOT EXISTS lst_status_idea (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255)) ENGINE=InnoDB");

    // Tabela cad_project
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_project (
            id INT AUTO_INCREMENT PRIMARY KEY,
            client_id INT,
            name TEXT NOT NULL,
            id_status INT,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (client_id) REFERENCES cad_client(id),
            FOREIGN KEY (id_status) REFERENCES lst_status_project(id)
        ) ENGINE=InnoDB
    ");

    // Tabela cad_module
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_module (
            id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            title VARCHAR(255),
            id_status INT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES cad_project(id),
            FOREIGN KEY (id_status) REFERENCES lst_status_module(id)
        ) ENGINE=InnoDB
    ");

    // Tabela cad_bug
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_bug (
            id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            title VARCHAR(255),
            id_status INT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES cad_project(id),
            FOREIGN KEY (id_status) REFERENCES lst_status_bug(id)
        ) ENGINE=InnoDB
    ");

    // Tabela cad_idea
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_idea (
            id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            title VARCHAR(255),
            id_status INT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES cad_project(id),
            FOREIGN KEY (id_status) REFERENCES lst_status_idea(id)
        ) ENGINE=InnoDB
    ");

    // Tabela cad_task
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_task (
            id INT AUTO_INCREMENT PRIMARY KEY,
            client_id INT,
            status VARCHAR(255),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (client_id) REFERENCES cad_client(id)
        ) ENGINE=InnoDB
    ");

    // Tabela cad_file
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_file (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            name TEXT,
            extension VARCHAR(10),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES cad_user(id)
        ) ENGINE=InnoDB
    ");

    // Tabela cad_project_attachment
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cad_project_attachment (
            id INT AUTO_INCREMENT PRIMARY KEY,
            project_id INT,
            name TEXT,
            extension VARCHAR(10),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES cad_project(id)
        ) ENGINE=InnoDB
    ");

    echo "Tabelas criadas com sucesso!";
} catch (PDOException $e) {
    echo "Erro: " . $e->getMessage();
}
