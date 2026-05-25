import conexao from "../../config/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config.js";

const modelUsuario = {
  
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
      console.log(senha, resultado[0].senha);
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
        return {
          acessToken,
          idUsuario: resultado[0].id,
          regra: resultado[0].regra,
        };
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  },
};

export default modelUsuario;
