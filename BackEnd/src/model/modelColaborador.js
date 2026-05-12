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
  },
  listar: async ()=>{
     try {
      const resultado = await conexao.query(
        "SELECT NOME , MARCA , ANO , QUILOMETRAGEM , VALOR , TRACAO , DATA_CADASTRO , DESCRICAO FROM veiculo ",
      );
      console.log(resultado);
      return resultado;
    } catch (error) {
      throw error;
    }
  }
};

export default modelColaborador;