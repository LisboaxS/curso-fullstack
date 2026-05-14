show databases;
use usuario;

create table usuario(
	id int primary key auto_increment,
    nome varchar(30),
    email varchar(50),
    tel decimal
);

select * from usuario;