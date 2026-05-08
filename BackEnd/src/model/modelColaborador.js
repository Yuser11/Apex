import conexao from "../../config/db.js";

const modelColaborador = {
  cadastrarColaborador: async ([
    id_usuario,
    nome,
    idade,
    cidade,
    estado,
    bairro,
    nif,
  ]) => {
    try {
      const [resultado] = await conexao.query(
        "INSERT INTO COLABORADOR ( id_usuario,nome,idade,cidade,estado,bairro,nf)VALUES(?,?,?,?,?,?,?)",
        [id_usuario, nome, idade, cidade, estado, bairro, nif],
      );
      return resultado;
    } catch (error) {
      return error;
    }
  }
};

export default modelColaborador;