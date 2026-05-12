    CREATE DATABASE APEX;
    USE APEX;

CREATE TABLE EMPRESA(
    id int(11) not null auto_increment,
    nome varchar(100) not null,  
    cnpj char(14) not null unique,
    email varchar(100) not null unique,
    localizacao varchar(100) not null,
    data_criacao date not null,
    telefone char(14) not null,
    observacoes text,
    primary key(id)
);

CREATE TABLE GALERIA(
    id int(11) not null auto_increment,
    empresa_id int(11) not null,
    imagem varchar(11) not null,
    primary key(id),
    constraint fk_galeria_empresa foreign key (empresa_id) references EMPRESA(id) on delete restrict on update cascade
);

CREATE TABLE PROFISSIONAL(
    id int(11) not null auto_increment,
    empresa_id int(11) not null,
    nome varchar(100) not null,  
    data_nascimento date not null,
    cpf char(11) not null, 
    email varchar(100) unique not null ,
    senha varchar(150) unique not null ,
    modalidade char(1) not null, 
    data_ingresso date not null,
    data_cadastro date not null default (current_date),
    regra char(1) not null, 
    primary key(id),
    constraint fk_profissional_empresa foreign key (empresa_id) references EMPRESA(id) on delete restrict on update cascade
);

CREATE TABLE VEICULO(
    id int(11) not null auto_increment primary key,
    empresa_id int(11) not null,
    nome varchar(100) not null,
    marca varchar(20) not null,
    ano int(4) not null,
    quilometragem int(6) not null,
    valor decimal(10,2) not null,
    tracao char(3) not null,
    data_cadastro date not null default (current_date),
    descricao text,
    constraint fk_carro_empresa foreign key (empresa_id) references EMPRESA(id) on delete restrict on update cascade
);

CREATE TABLE ENDERECO(
    id int(11) not null auto_increment,
    cep char(8) not null,
    numero char(6) not null,
    bairro varchar(100) not null,
    rua varchar(100) not null, 
    estado char(2) not null,
    cidade varchar(40),
    complemento text,
    primary key(id)
);

CREATE TABLE CLIENTE(
    id int(11) not null auto_increment,
    empresa_id int(11) not null,   
    nome varchar(100) not null,
    email varchar(100) unique,
    data_cadastro datetime default (current_date),
    telefone char(14) not null,
    endereco_id int(11) not null,
    genero char(1) not null,
    data_nascimento date not null,
    cpf char(14) not null unique,
    observacoes text,
    primary key(id),
    constraint fk_cliente_empresa foreign key (empresa_id) references EMPRESA(id) on delete restrict on update cascade,
    constraint fk_cliente_endereco foreign key (endereco_id) references ENDERECO(id) on delete restrict on update cascade
);

CREATE TABLE COMPRA(
    id int(11) not null auto_increment,
    empresa_id int(11) not null,
    cliente_id int(11) not null,
    veiculo_id int(11) not null,
    data_compra datetime default(current_time) not null,
    primary key(id),
    constraint fk_compra_empresa foreign key (empresa_id)  references EMPRESA(id) on delete restrict on update cascade,
    constraint fk_compra_cliente foreign key (cliente_id) references CLIENTE(id) on delete restrict on update cascade,
    constraint fk_compra_veiculo foreign key (veiculo_id) references VEICULO(id) on delete restrict on update cascade
);
