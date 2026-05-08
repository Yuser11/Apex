import conexao from "../../config/db.js";

const modelProfessor = {
  listarTodosUsuarios: async () => {
    try {
      const resultado = await conexao.query(
        "SELECT `ID`, `NOME`, `IDADE`, `CIDADE`, `ESTADO`, `NIF` FROM `professor_teste`",
      );
      return resultado[0];
    } catch (error) {
      throw error;
    }
  },
  listarPorID: async (id) => {
    try {
      const resultado = await conexao.query(
        "SELECT `ID`, `NOME`, `IDADE`, `CIDADE`, `ESTADO`, `NIF` FROM `professor_teste` WHERE ID = ?",
        id,
      );
      return resultado[0];
    } catch (error) {
      throw error;
    }
  },
  listarPorNome: async (nome) => {
    try {
      const resultado = await conexao.query(
        "SELECT `ID`, `NOME`, `IDADE`, `CIDADE`, `ESTADO`, `NIF` FROM `professor_teste` WHERE NOME = ?",
        nome,
      );
      return resultado;
    } catch (error) {
      throw error;
    }
  },
  cadastrarProfessor: async ([nome, idade, cidade, estado, nif]) => {
    try {
      const resultado = await conexao.query(
        "INSERT INTO PROFESSOR_TESTE (NOME,IDADE,CIDADE,ESTADO,NIF)VALUES(?,?,?,?,?)",
        [nome, idade, cidade, estado, nif],
      );
      return resultado;
    } catch (error) {
      throw error;
    }
  },

  async listarProfessor() {
    try {
      const resultado = await conexao.query(
        "SELECT `ID`, `NOME`, `IDADE`, `CIDADE`, `ESTADO`, `NIF` FROM `professor_teste`",
      );
      return resultado[0];
    } catch (error) {
      throw error;
    }
  },

  deletarProfessor: async (id) => {
    console.log("DELETE FROM `professor_teste` WHERE id =", id);
    try {
      const resultado = await conexao.query(
        "DELETE FROM professor_teste WHERE ID = ?",
        id,
      );
      return resultado[0];
    } catch (error) {
      throw error;

    }
  },

  atualizarProfessor: async ([id, nome, idade, cidade, estado, nif]) => {
    try {
      const resultado = await conexao.query(
        "UPDATE PROFESSOR_TESTE SET nome = ?, idade  = ?, cidade = ?, estado = ?, nif = ? WHERE id = ?;",
        [nome, idade, cidade, estado, nif, id],
      );
      console.log(resultado[0]);
      return resultado[0];
    } catch (error) {
      throw error;
    }
  },
};

export default modelProfessor