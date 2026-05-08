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
          regra
  ]) => {
    try {
      const senhaHash = await bcrypt.hash(senha, 12);
      console.log({ senha: senhaHash });
      const resultado = await conexao.query(
        "INSERT INTO PROFISSIONAL (empresa_id,nome,data_nascimento,cpf,email,senha,modalidade,data_ingresso,regra)VALUES(1,?,?,?,?,?,?,?,?)",
        [
          nome,
          dataNascimento,
          cpf,
          email,
          senhaHash,
          modalidade,
          dataIngresso,
          regra
        ],
      );
      return resultado[0];
    } catch (error) {
      return error;
    }
  },
  ValidarLogin: async (email, senha) => {
    try {
      console.log(email, senha);
      const [resultado] = await conexao.query(
        "SELECT ID, EMPRESA_ID, NOME, EMAIL, SENHA, CPF, MODALIDADE, DATA_INGRESSO, DATA_CADASTRO, REGRA FROM profissional WHERE EMAIL = ?",
        [email],
      );
      console.log(resultado[0]);
      if(!resultado[0]){
        return null
      }
      console.log(senha, resultado[0].SENHA);
      const validar = await bcrypt.compare(senha, resultado[0].SENHA);
      console.log(validar)
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
