import modelCliente from "../model/modelCliente.js";

const controllerCliente = {
  cadastrar: async (req, res) => {
    try {
      const {
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
      } = req.body;
      if (
        !nome ||
        !cpf ||
        !email ||
        !genero ||
        !dataNascimento ||
        //endereco
        !cep ||
        !numero ||
        !bairro ||
        !rua ||
        !estado ||
        !cidade ||
        !complemento ||
        //endereco
        !estado ||
        !cidade ||
        !complemento
      ) {
        res.status(400).json({ msg: "insira todos os campos" });
      }
      console.log(
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
      );
      const resposta = await modelCliente.cadastrar([
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
      ]);
      console.log(resposta);
      if (!resposta) {
        res.status(500).json({ API: "DUPLICADO" });
      } else if (resposta.affectedRows === 1)
        res.status(201).json({ API: "INSERIDO" });
    } catch (error) {
      console.log(error);
      console.log(error.code);
    }
  },
  listar: async (req, res) => {
    try {
      {
      }
      const [resposta] = await modelCliente.listar();

      console.log(resposta);
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json({ API: error });
    }
  },
  listarPorId: async (req, res) => {
    try {
      {
      }
      const id = req.params.id;
      console.log(id);
      const [resposta] = await modelCliente.listarPorId(id);

      console.log(resposta);
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json({ API: error });
    }
  },
};
export default controllerCliente;
