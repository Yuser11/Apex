-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 11/05/2026 às 21:01
-- Versão do servidor: 12.2.2-MariaDB
-- Versão do PHP: 8.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `APEX`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `CLIENTE`
--

CREATE TABLE `CLIENTE` (
  `id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT curdate(),
  `telefone` char(14) NOT NULL,
  `endereco_id` int(11) NOT NULL,
  `genero` char(1) NOT NULL,
  `data_nascimento` date NOT NULL,
  `cpf` char(14) NOT NULL,
  `observacoes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `COMPRA`
--

CREATE TABLE `COMPRA` (
  `id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `veiculo_id` int(11) NOT NULL,
  `data_compra` datetime NOT NULL DEFAULT curtime()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `EMPRESA`
--

CREATE TABLE `EMPRESA` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cnpj` char(14) NOT NULL,
  `email` varchar(100) NOT NULL,
  `localizacao` varchar(100) NOT NULL,
  `data_criacao` date NOT NULL,
  `telefone` char(14) NOT NULL,
  `observacoes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `EMPRESA`
--

INSERT INTO `EMPRESA` (`id`, `nome`, `cnpj`, `email`, `localizacao`, `data_criacao`, `telefone`, `observacoes`) VALUES
(1, 'YU', '[value-3]', '[value-4]', '[value-5]', '1990-12-31', '[value-7]', '[value-8]');

-- --------------------------------------------------------

--
-- Estrutura para tabela `ENDERECO`
--

CREATE TABLE `ENDERECO` (
  `id` int(11) NOT NULL,
  `cep` char(8) NOT NULL,
  `numero` char(6) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `estado` char(2) NOT NULL,
  `cidade` varchar(40) DEFAULT NULL,
  `complemento` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `GALERIA`
--

CREATE TABLE `GALERIA` (
  `id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `imagem` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `PROFISSIONAL`
--

CREATE TABLE `PROFISSIONAL` (
  `id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `cpf` char(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `modalidade` char(1) NOT NULL,
  `data_ingresso` date NOT NULL,
  `data_cadastro` date NOT NULL DEFAULT curdate(),
  `regra` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `PROFISSIONAL`
--

INSERT INTO `PROFISSIONAL` (`id`, `empresa_id`, `nome`, `data_nascimento`, `cpf`, `email`, `senha`, `modalidade`, `data_ingresso`, `data_cadastro`, `regra`) VALUES
(1, 1, 'yuri', '2009-12-31', '2121', 'yuy@yuy', '$2b$12$uYsIvLcpNfFrVxEzDPh7b.oVgoBOyMKuZUeB1/KLRTmROLA0bsv7S', 'P', '2020-12-31', '2026-05-11', 'P');

-- --------------------------------------------------------

--
-- Estrutura para tabela `VEICULO`
--

CREATE TABLE `VEICULO` (
  `id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `marca` varchar(20) NOT NULL,
  `ano` int(4) NOT NULL,
  `quilometragem` int(6) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `tracao` char(3) NOT NULL,
  `data_cadastro` date NOT NULL DEFAULT curdate(),
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `CLIENTE`
--
ALTER TABLE `CLIENTE`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_cliente_empresa` (`empresa_id`),
  ADD KEY `fk_cliente_endereco` (`endereco_id`);

--
-- Índices de tabela `COMPRA`
--
ALTER TABLE `COMPRA`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_compra_empresa` (`empresa_id`),
  ADD KEY `fk_compra_cliente` (`cliente_id`),
  ADD KEY `fk_compra_veiculo` (`veiculo_id`);

--
-- Índices de tabela `EMPRESA`
--
ALTER TABLE `EMPRESA`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cnpj` (`cnpj`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `ENDERECO`
--
ALTER TABLE `ENDERECO`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `GALERIA`
--
ALTER TABLE `GALERIA`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_galeria_empresa` (`empresa_id`);

--
-- Índices de tabela `PROFISSIONAL`
--
ALTER TABLE `PROFISSIONAL`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `senha` (`senha`),
  ADD KEY `fk_profissional_empresa` (`empresa_id`);

--
-- Índices de tabela `VEICULO`
--
ALTER TABLE `VEICULO`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_carro_empresa` (`empresa_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `CLIENTE`
--
ALTER TABLE `CLIENTE`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `COMPRA`
--
ALTER TABLE `COMPRA`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `EMPRESA`
--
ALTER TABLE `EMPRESA`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `ENDERECO`
--
ALTER TABLE `ENDERECO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `GALERIA`
--
ALTER TABLE `GALERIA`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `PROFISSIONAL`
--
ALTER TABLE `PROFISSIONAL`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `VEICULO`
--
ALTER TABLE `VEICULO`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `CLIENTE`
--
ALTER TABLE `CLIENTE`
  ADD CONSTRAINT `fk_cliente_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `EMPRESA` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_cliente_endereco` FOREIGN KEY (`endereco_id`) REFERENCES `ENDERECO` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `COMPRA`
--
ALTER TABLE `COMPRA`
  ADD CONSTRAINT `fk_compra_cliente` FOREIGN KEY (`cliente_id`) REFERENCES `CLIENTE` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_compra_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `EMPRESA` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_compra_veiculo` FOREIGN KEY (`veiculo_id`) REFERENCES `VEICULO` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `GALERIA`
--
ALTER TABLE `GALERIA`
  ADD CONSTRAINT `fk_galeria_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `EMPRESA` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `PROFISSIONAL`
--
ALTER TABLE `PROFISSIONAL`
  ADD CONSTRAINT `fk_profissional_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `EMPRESA` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `VEICULO`
--
ALTER TABLE `VEICULO`
  ADD CONSTRAINT `fk_carro_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `EMPRESA` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
