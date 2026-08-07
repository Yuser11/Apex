import conexao from "../../config/db.js";

const modelVeiculo = {
  cadastrar: async ([nome, marca, ano, tracao, quilometragem, valor, descricao]) => {
    try {
      console.log([nome, marca, ano, tracao, quilometragem, valor, descricao])
      console.log('passo')
      const resultado = await conexao.query(
        "INSERT INTO VEICULO (empresa_id,nome,marca,ano,tracao,quilometragem,valor,descricao)VALUES(1,?,?,?,?,?,?,?)",
        [ nome, marca, ano, tracao, quilometragem, valor, descricao]
      );
      return resultado;
    } catch (error) {
      console.log(error)
      return error;
    }
  },
  listar: async () => {
    try {
      const resultado = await conexao.query(
        "SELECT id, nome , marca , ano , quilometragem , valor , tracao , data_cadastro , descricao FROM veiculo ",
      );
      console.log(resultado);
      return resultado;
    } catch (error) { 
      throw error;
    }
  },

  deletar: async (id) => {
    try {
      const resultado = await conexao.query(
        "DELETE FROM PRODUTO WHERE ID = ?",
        id,
      );
      console.log(resultado);
      console.log(resultado[0]);
      return resultado[0];
    } catch (error) {
      throw error;
    }
  },

  listarPorID: async (id) => {
    try {
      const resultado = await conexao.query(
        "SELECT NOME, QUANTIDADE, VALOR, CODIGO FROM PRODUTO WHERE ID = ?",
        id,
      );
      console.log(resultado);
      console.log(resultado[0]);
      return resultado[0];
    } catch (error) {
      throw error;
    }
  },

  atualizarPorID: async ([id, nome, quantidade, valor]) => {
    try {
      console.log(id, nome, quantidade, valor);
      const resultado = await conexao.query(
        "UPDATE PRODUTO SET NOME = ?, QUANTIDADE = ?, VALOR = ? WHERE id = ?",
        [nome, quantidade, valor, id],
      );
      console.log(resultado);
      console.log(resultado[0]);
      return resultado[0];
    } catch (error) {
      throw error;
    }
  },
};

export default modelVeiculo;
