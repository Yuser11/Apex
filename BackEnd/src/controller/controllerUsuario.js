import modelUsuario from "../model/modelUsuario.js";
const controllerUsuario = {
  raiz: async (req, res) => {
    res.status(200).json({ msg: "a API esta online" });
  },

  cadastrar: async (req, res) => {
    try {
      const {
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
      } = req.body;
      if (
        !nome ||
        !dataNascimento ||
        !cpf ||
        !email ||
        !senha ||
        !modalidade ||
        !dataIngresso ||
        !regra ||
        //endereco
        !cep ||
        !numero ||
        !bairro ||
        !rua ||
        !estado ||
        !cidade ||
        !complemento
      ) {
        res.status(400).json({ msg: "insira todos os campos" });
      }
      const resposta = await modelUsuario.cadastrarUsuario([
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

  login: async (req, res) => {
    try {
      console.log(req.body);
      const { email, senha } = req.body;
      const resposta = await modelUsuario.ValidarLogin(email, senha);
      console.log(resposta);
      if (!resposta) {
        res.status(400).json(resposta);
      }
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
    }
  },
};
export default controllerUsuario;
