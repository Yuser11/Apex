import conexao from "../../config/db.js";
import bcrypt from "bcrypt";

const modelCliente = {
  cadastrar: async ([
    nome,
    cpf,
    email,
    genero,
    dataNascimento,
    //endereco
    cep,
    numero,
    bairro,
    rua,
    estado,
    cidade,
    complemento,

    //telefone
    telefone,
    telefoneFixo,
  ]) => {
    try {
      const [[duplicado]] = await conexao.query(
        "SELECT id from CLIENTE WHERE email = ?",
        [email],
      );
      console.log(duplicado);

      if (!duplicado) {
        console.log("novo");
        const endereco_id = (
          await conexao.query(
            "INSERT INTO endereco( cep, numero, bairro, rua, estado, cidade, complemento) VALUES (?,?,?,?,?,?,?)",
            [cep, numero, bairro, rua, estado, cidade, complemento],
          )
        )[0].insertId;
        const telefone_id = (
          await conexao.query(
            "INSERT INTO telefone(movel, fixo) VALUES (?,?)",
            [telefone, telefoneFixo],
          )
        )[0].insertId;
        console.log(endereco_id);
        const [resultado] = await conexao.query(
          "INSERT INTO CLIENTE (empresa_id,endereco_id,nome,cpf,email,genero,data_nascimento,telefone_id)VALUES(1,?,?,?,?,?,?,?)",
          [endereco_id, nome, cpf, email, genero, dataNascimento, telefone_id],
        );
        return resultado;
      } else {
        console.log("duplicado");
        return null;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  listar: async () => {
    try {
      const resultado = await conexao.query(
        "SELECT id, nome, data_nascimento, cpf,genero,email FROM CLIENTE WHERE 1",
      );
      console.log(resultado);
      return resultado;
    } catch (error) {
      throw error;
    }
  },
  listarPorId: async (id) => {
    try {
      const [resultado] = await conexao.query(
        `select cliente.id, cliente.nome, cliente.data_nascimento, cliente.cpf, cliente.email, cliente.genero, endereco.cep, endereco.numero, endereco.bairro, endereco.rua, endereco.estado, endereco.cidade, endereco.complemento, telefone.movel, telefone.fixo, telefone.emergencia
         from cliente
         inner join endereco 
         on cliente.endereco_id=endereco.id
         inner join telefone 
         on cliente.telefone_id=telefone.id
         where cliente.id = ?`,
        [id],
      );
      console.log(resultado);
      return resultado;
    } catch (error) {
      throw error;
    }
  }
};

export default modelCliente;
