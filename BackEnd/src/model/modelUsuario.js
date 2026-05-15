import conexao from "../../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config.js";

const modelUsuario = {
  cadastrarUsuario: async ([
    nome,
    dataNascimento,
    cpf,
    email,
    senha,
    modalidade,
    dataIngresso,
    regra,
    //endereco
    cep,
    numero,
    bairro,
    rua,
    estado,
    cidade,
    complemento,
  ]) => {
    try {
      const senhaHash = await bcrypt.hash(senha, 12);
      console.log({ senha: senhaHash });
      const [[duplicado]] = (
          await conexao.query(
            "SELECT id from PROFISSIONAL WHERE email = ?",
            [email],
          )
        );
        console.log(duplicado)
      
      if(!duplicado){
        console.log("novo")
        const endereco_id = (
          await conexao.query(
            "INSERT INTO `endereco`( `cep`, `numero`, `bairro`, `rua`, `estado`, `cidade`, `complemento`) VALUES (?,?,?,?,?,?,?)",
            [cep, numero, bairro, rua, estado, cidade, complemento],
          )
        )[0].insertId;
        console.log(endereco_id);
        const [resultado] = await conexao.query(
        "INSERT INTO PROFISSIONAL (empresa_id,endereco_id,nome,data_nascimento,cpf,email,senha,modalidade,data_ingresso,regra)VALUES(1,?,?,?,?,?,?,?,?,?)",
        [
          endereco_id,
          nome,
          dataNascimento,
          cpf,
          email,
          senhaHash,
          modalidade,
          dataIngresso,
          regra,
        ],
      );
      return resultado;
    }
    else{
      console.log("duplicado")
      return null
    }
    } catch (error) {
      console.log(error)
      return error;
    }
  },
  ValidarLogin: async (email, senha) => {
    try {
      console.log(email, senha);
      const [resultado] = await conexao.query(
        "SELECT ID, empresa_id, nome, email, senha, cpf, modalidade, data_ingresso, data_cadastro, regra FROM PROFISSIONAL WHERE email = ?",
        [email],
      );
      console.log(resultado[0]);
      if (!resultado[0]) {
        return null;
      }
      console.log(senha, resultado[0].SENHA);
      const validar = await bcrypt.compare(senha, resultado[0].senha);
      console.log(validar);
      if (validar) {
        const acessToken = jwt.sign(
          {
            id: resultado[0].id,
            nome: resultado[0].nome,
            email: resultado[0].email,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "25m",
          },
        );
        return { acessToken };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  },
};

export default modelUsuario;
