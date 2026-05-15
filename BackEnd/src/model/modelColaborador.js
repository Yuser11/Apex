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
        "SELECT `ID`, `EMPRESA_ID`, `NOME`, `DATA_NASCIMENTO`, `CPF`, `EMAIL`, `SENHA`, `MODALIDADE`, `DATA_INGRESSO`, `DATA_CADASTRO`, `REGRA` FROM `profissional` WHERE 1",
      );
      console.log(resultado);
      return resultado;
    } catch (error) {
      throw error;
    }
  }
};

export default modelColaborador;