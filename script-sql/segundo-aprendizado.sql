show databases;

use novoprojeto;

CREATE TABLE jogador(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    cidade VARCHAR(50),
    salario DECIMAL,
    times varchar(50),
    titulo decimal
);

SELECT * FROM  jogador;


INSERT INTO jogador (nome, cidade, salario, times, titulo) VALUES 
('Ronaldo fenomeno', 'São Paulo', 150000, "Santos e Brasil", 30),
("Zinedine Zidane", "Marselha", 5000, "Santos e Brasil", 30),
("Lucas moura", "São Paulo", 6000, "Santos e Brasil", 30),
("Neymar", "São Paulo", 800, "Santos e Brasil", 30);

SELECT * FROM  jogador;