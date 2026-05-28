-- Cria o banco de dados
create database copa_mundo;

-- Usar o banco
use copa_mundo;

-- Cria tabela 'selecao' com 3 colunas

create table selecoes (
	id  int auto_increment primary key, -- d unico que aumenta automaticamente
	selecao varchar(100) not null, -- nome da selecao, texto até 100 caracteres
    grupo char(1) not null -- grupo da seleca, apenas uma letra (A, B, C) 
);


select * from selecoes;	

-- insere várias seleçoes de uma vez na tabela
insert into selecoes (selecao, grupo) values
	('Brasil', 'A'),
    ('França', 'B'),
    ('Ilhas Salomão' , 'C'),
    ('Nova Zelândia','D'),
    ('Nigéria', 'E'),
    ('Japão', 'C');

    
    


