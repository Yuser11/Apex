INSERT INTO `endereco` (`id`, `cep`, `numero`, `bairro`, `rua`, `estado`, `cidade`, `complemento`) VALUES
(1, '1414', '332', 'monte', 'tem', 'SP', 'GARCA', 'feijao com farinha'),
(2, '01010001', '00', 'Centro', 'Rua São Bento', 'SP', 'São Paulo', 'de 320 ao fim - lado par');

INSERT INTO `telefone` (`id`, `movel`, `fixo`, `emergencia`) VALUES
(1, '887501304', '3341212', NULL),
(2, '000000000', '00000000', '000000000');

INSERT INTO `empresa` (`id`, `nome`, `cnpj`, `email`, `data_criacao`, `observacoes`, `endereco_id`, `telefone_id`) VALUES
(1, 'empresa', '14143131', 'empresa@gmail.com', '1999-09-28', 'welcome to the mato', 1, 1);

INSERT INTO `profissional` (`id`, `nome`, `data_nascimento`, `cpf`, `email`, `senha`, `modalidade`, `data_ingresso`, `data_cadastro`, `regra`, `endereco_id`, `telefone_id`, `empresa_id`) VALUES
(1, 'admin', '2026-05-01', '00000000000', 'admin@gmail', '$2b$12$mXP.WOm6kFalsMI63Gj1wu/9x.BjfZE45LTMJNoBH1JKm1s9330Ge', 'presencial', '2026-05-01', '2026-05-25', 'admin', 2, 2, 1);
// 123