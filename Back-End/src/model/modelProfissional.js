import conexao from "../../config/db.js";
import bcrypt from "bcrypt";

const modelProfissional = {
  cadastrar: async ([
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

    //telefone
    telefone,
    telefoneFixo,
    contatoEmergencia,
  ]) => {
    try {
      const senhaHash = await bcrypt.hash(senha, 12);
      console.log({ senha: senhaHash });
      const [[duplicado]] = await conexao.query(
        "SELECT id from PROFISSIONAL WHERE email = ?",
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
            "INSERT INTO telefone(movel, fixo,emergencia) VALUES (?,?,?)",
            [telefone, telefoneFixo, contatoEmergencia],
          )
        )[0].insertId;
        console.log(endereco_id);
        const [resultado] = await conexao.query(
          "INSERT INTO PROFISSIONAL (empresa_id,endereco_id,nome,data_nascimento,cpf,email,senha,modalidade,data_ingresso,regra,telefone_id)VALUES(1,?,?,?,?,?,?,?,?,?,?)",
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
            telefone_id,
          ],
        );
        console.log(
          "INSERT INTO PROFISSIONAL (empresa_id,endereco_id,nome,data_nascimento,cpf,email,senha,modalidade,data_ingresso,regra,telefone_id)VALUES(1,?,?,?,?,?,?,?,?,?,?)",
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
            telefone_id,
          ],
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
        `SELECT  PROFISSIONAL.id, PROFISSIONAL.empresa_id, PROFISSIONAL.nome, PROFISSIONAL.data_nascimento, PROFISSIONAL.cpf, PROFISSIONAL.email, PROFISSIONAL.modalidade, PROFISSIONAL.data_ingresso, PROFISSIONAL.data_cadastro, PROFISSIONAL.regra, ENDERECO.cep, TELEFONE.movel
        FROM PROFISSIONAL 
        JOIN ENDERECO ON ENDERECO.id = PROFISSIONAL.endereco_id
        JOIN TELEFONE ON TELEFONE.id = PROFISSIONAL.telefone_id
        WHERE 1`,
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
        `SELECT profissional.id, profissional.nome, profissional.data_nascimento, profissional.cpf, profissional.email, profissional.modalidade, profissional.data_ingresso, profissional.data_cadastro, profissional.regra, endereco.cep, endereco.numero, endereco.bairro, endereco.rua, endereco.estado, endereco.cidade, endereco.complemento, telefone.movel, telefone.fixo, telefone.emergencia
         FROM profissional
         INNER JOIN endereco 
         ON profissional.endereco_id=endereco.id
         INNER JOIN telefone 
         ON profissional.telefone_id=telefone.id
         WHERE profissional.id = ?`,
        id,
      );
      console.log(resultado);
      return resultado;
    } catch (error) {
      throw error;
    }
  },
  atualizarPorId: async (
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

    //telefone
    telefone,
    telefoneFixo,
    contatoEmergencia,
    id,
  ) => {
    try {
      console.log(
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

        //telefone
        telefone,
        telefoneFixo,
        contatoEmergencia,
        id,
      );

      console.log(
        "SELECT endereco_id, telefone_id from PROFISSIONAL WHERE id = ?",
        [id],
      );
      const [[profissional]] = await conexao.query(
        "SELECT endereco_id, telefone_id from PROFISSIONAL WHERE id = ?",
        id,
      );
      console.log(profissional);
      console.log(profissional.endereco_id);
      console.log(profissional.telefone_id);

      const senhaHash = await bcrypt.hash(senha, 12);
      console.log({ senha: senhaHash });
      const [resultadoProfissional] = await conexao.query(
        "UPDATE PROFISSIONAL SET nome= ?, data_nascimento= ?, cpf= ?, email= ?,senha= ?,modalidade= ?,data_ingresso= ?, regra= ? WHERE id = ?",
        [
          nome,
          dataNascimento,
          cpf,
          email,
          senhaHash,
          modalidade,
          dataIngresso,
          regra,
          id,
        ],
      );

      const [resultadoTelefone] = await conexao.query(
        "UPDATE TELEFONE SET movel= ?, fixo= ?, emergencia= ? WHERE id = ?",
        [telefone, telefoneFixo, contatoEmergencia, profissional.telefone_id],
      );

      const [resultadoEndereco] = await conexao.query(
        "UPDATE ENDERECO SET cep= ?, numero= ?, bairro= ?, rua = ?, estado = ?, cidade = ?,complemento = ? WHERE id = ?",
        [
          cep,
          numero,
          bairro,
          rua,
          estado,
          cidade,
          complemento,
          profissional.endereco_id,
        ],
      );

      console.log(resultadoProfissional);
      console.log(resultadoTelefone);
      console.log(resultadoEndereco);

      console.log(
        resultadoProfissional.affectedRows > 0,
        resultadoEndereco.affectedRows > 0,
        resultadoTelefone.affectedRows > 0,
      );

      if (
        resultadoProfissional.affectedRows > 0 &&
        resultadoEndereco.affectedRows > 0 &&
        resultadoTelefone.affectedRows > 0
      ) {
        return "sucesso";
      } else {
        return "erro no update";
      }
      return null;
    } catch (error) {
      throw error;
    }
  },
  deletar: async (id) => {
    try {
      console.log(id);

      console.log(
        "SELECT endereco_id, telefone_id from PROFISSIONAL WHERE id = ?",
        [id],
      );
      const [[profissional]] = await conexao.query(
        "SELECT endereco_id, telefone_id from PROFISSIONAL WHERE id = ?",
        id,
      );
      console.log(profissional);
      console.log(profissional.endereco_id);
      console.log(profissional.telefone_id);

      const [resultadoProfissional] = await conexao.query(
        "DELETE FROM PROFISSIONAL WHERE id = ?",
        [id],
      );

      const [resultadoTelefone] = await conexao.query(
        "DELETE FROM TELEFONE WHERE id = ?",
        [profissional.telefone_id],
      );

      const [resultadoEndereco] = await conexao.query(
        "DELETE FROM ENDERECO WHERE id = ?",
        [profissional.endereco_id],
      );

      console.log(resultadoProfissional);
      console.log(resultadoTelefone);
      console.log(resultadoEndereco);

      console.log(
        resultadoProfissional.affectedRows > 0,
        resultadoEndereco.affectedRows > 0,
        resultadoTelefone.affectedRows > 0,
      );

      if (
        resultadoProfissional.affectedRows > 0 &&
        resultadoEndereco.affectedRows > 0 &&
        resultadoTelefone.affectedRows > 0
      ) {
        return "sucesso";
      } else {
        return "erro no update";
      }
      return null;
    } catch (error) {
      throw error;
    }
  },
};

export default modelProfissional;
