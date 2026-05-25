-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25/05/2026 às 22:35
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `apex`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` char(14) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `data_cadastro` datetime DEFAULT curdate(),
  `genero` char(1) NOT NULL,
  `data_nascimento` date NOT NULL,
  `observacoes` text DEFAULT NULL,
  `endereco_id` int(11) NOT NULL,
  `telefone_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `compra`
--

CREATE TABLE `compra` (
  `id` int(11) NOT NULL,
  `data_compra` datetime NOT NULL DEFAULT curtime(),
  `cliente_id` int(11) NOT NULL,
  `veiculo_id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cnpj` char(14) NOT NULL,
  `email` varchar(100) NOT NULL,
  `data_criacao` date NOT NULL,
  `observacoes` text DEFAULT NULL,
  `endereco_id` int(11) NOT NULL,
  `telefone_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `empresa`
--

INSERT INTO `empresa` (`id`, `nome`, `cnpj`, `email`, `data_criacao`, `observacoes`, `endereco_id`, `telefone_id`) VALUES
(1, 'empresa', '14143131', 'empresa@gmail.com', '1999-09-28', 'welcome to the mato', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `endereco`
--

CREATE TABLE `endereco` (
  `id` int(11) NOT NULL,
  `cep` char(8) NOT NULL,
  `numero` char(6) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `estado` char(2) NOT NULL,
  `cidade` varchar(40) DEFAULT NULL,
  `complemento` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `endereco`
--

INSERT INTO `endereco` (`id`, `cep`, `numero`, `bairro`, `rua`, `estado`, `cidade`, `complemento`) VALUES
(1, '1414', '332', 'monte', 'tem', 'SP', 'GARCA', 'feijao com farinha'),
(2, '01010001', '00', 'Centro', 'Rua São Bento', 'SP', 'São Paulo', 'de 320 ao fim - lado par');

-- --------------------------------------------------------

--
-- Estrutura para tabela `galeria`
--

CREATE TABLE `galeria` (
  `id` int(11) NOT NULL,
  `imagem` varchar(150) NOT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  `profissional_id` int(11) DEFAULT NULL,
  `veiculo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `profissional`
--

CREATE TABLE `profissional` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `data_nascimento` date NOT NULL,
  `cpf` char(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `modalidade` varchar(10) NOT NULL,
  `data_ingresso` date NOT NULL,
  `data_cadastro` date NOT NULL DEFAULT curdate(),
  `regra` varchar(10) NOT NULL,
  `endereco_id` int(11) NOT NULL,
  `telefone_id` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `profissional`
--

INSERT INTO `profissional` (`id`, `nome`, `data_nascimento`, `cpf`, `email`, `senha`, `modalidade`, `data_ingresso`, `data_cadastro`, `regra`, `endereco_id`, `telefone_id`, `empresa_id`) VALUES
(1, 'admin', '2026-05-01', '00000000000', 'admin@gmail', '$2b$12$igrDCAEHoNU0HwcRCnoINe6AbEoJrUSwCwgzfp49qDE22gkBrW6Ni', 'presencial', '2026-05-01', '2026-05-25', 'admin', 2, 2, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `telefone`
--

CREATE TABLE `telefone` (
  `id` int(11) NOT NULL,
  `movel` char(9) NOT NULL,
  `fixo` char(8) NOT NULL,
  `emergencia` char(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `telefone`
--

INSERT INTO `telefone` (`id`, `movel`, `fixo`, `emergencia`) VALUES
(1, '887501304', '3341212', NULL),
(2, '000000000', '00000000', '000000000');

-- --------------------------------------------------------

--
-- Estrutura para tabela `veiculo`
--

CREATE TABLE `veiculo` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `marca` varchar(20) NOT NULL,
  `ano` int(4) NOT NULL,
  `quilometragem` int(6) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `tracao` char(3) NOT NULL,
  `data_cadastro` date NOT NULL DEFAULT curdate(),
  `descricao` text DEFAULT NULL,
  `empresa_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_cliente_empresa` (`empresa_id`),
  ADD KEY `fk_cliente_endereco` (`endereco_id`),
  ADD KEY `fk_cliente_telefone` (`telefone_id`);

--
-- Índices de tabela `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_compra_empresa` (`empresa_id`),
  ADD KEY `fk_compra_cliente` (`cliente_id`),
  ADD KEY `fk_compra_veiculo` (`veiculo_id`);

--
-- Índices de tabela `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cnpj` (`cnpj`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_empresa_endereco` (`endereco_id`),
  ADD KEY `fk_empresa_telefone` (`telefone_id`);

--
-- Índices de tabela `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_galeria_empresa` (`empresa_id`),
  ADD KEY `fk_galeria_profissional` (`profissional_id`),
  ADD KEY `fk_galeria_veiculo` (`veiculo_id`),
  ADD KEY `fk_galeria_cliente` (`cliente_id`);

--
-- Índices de tabela `profissional`
--
ALTER TABLE `profissional`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_profissional_empresa` (`empresa_id`),
  ADD KEY `fk_profissional_telefone` (`telefone_id`),
  ADD KEY `fk_profissional_endereco` (`endereco_id`);

--
-- Índices de tabela `telefone`
--
ALTER TABLE `telefone`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `veiculo`
--
ALTER TABLE `veiculo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_carro_empresa` (`empresa_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `compra`
--
ALTER TABLE `compra`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `galeria`
--
ALTER TABLE `galeria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `profissional`
--
ALTER TABLE `profissional`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `telefone`
--
ALTER TABLE `telefone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `veiculo`
--
ALTER TABLE `veiculo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `fk_cliente_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_cliente_endereco` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_cliente_telefone` FOREIGN KEY (`telefone_id`) REFERENCES `telefone` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `compra`
--
ALTER TABLE `compra`
  ADD CONSTRAINT `fk_compra_cliente` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_compra_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_compra_veiculo` FOREIGN KEY (`veiculo_id`) REFERENCES `veiculo` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `fk_empresa_endereco` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_empresa_telefone` FOREIGN KEY (`telefone_id`) REFERENCES `telefone` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `galeria`
--
ALTER TABLE `galeria`
  ADD CONSTRAINT `fk_galeria_cliente` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_galeria_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_galeria_profissional` FOREIGN KEY (`profissional_id`) REFERENCES `profissional` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_galeria_veiculo` FOREIGN KEY (`veiculo_id`) REFERENCES `veiculo` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `profissional`
--
ALTER TABLE `profissional`
  ADD CONSTRAINT `fk_profissional_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_profissional_endereco` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_profissional_telefone` FOREIGN KEY (`telefone_id`) REFERENCES `telefone` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `veiculo`
--
ALTER TABLE `veiculo`
  ADD CONSTRAINT `fk_carro_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
